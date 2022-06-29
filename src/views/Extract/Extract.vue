<template>
  <section class="content">
    <div class="filter">
      <div class="radio-group">
        <span v-for="(filter, key) in filterByList" :for="key" :key="key">
          <input type="radio" name="sortBy" :id="key" v-model="filterBySelected" :value="key" />
          <label>
            {{ filter }}
          </label>
        </span>
      </div>

      <div class="search">
        <input type="text" v-model="search" placeholder="Pesquisar" id="search-input" />
      </div>
    </div>

    <Table :fields="fieldsList">
      <TableBody v-if="!search && filterBySelected == 'ALL'" :items="items">
      </TableBody>
      <TableBody v-else :filteredItems="filteredItems">
      </TableBody>
    </Table>
    <div v-if="search && !filteredItems.length || !items.length">
      <p>Nenhum resultado encontrado</p>
    </div>
  </section>
</template>

<script>
import { ENTRY_TYPE, SOURCE_TYPE, TRANSACTION_TYPE, STATUS_TYPE } from '@/shared/constants/TransactionType.js';
import { FILTER_TYPE } from '@/shared/constants/FilterType.js';
import { getData } from '@/api/ExtractService';
import Table from '@/shared/components/Table/Table.vue';
import TableBody from '@/shared/components/Table/TableBody.vue';

export default {
  name: "ExtractPage",
  components: { Table, TableBody },
  data() {
    return {
      filterBySelected: "ALL",
      filterByList: FILTER_TYPE,
      selected: "",
      search: '',
      items: [],
      details: [],
      fieldsList: [" ", "Tipo de transação", "Data", "Valor"]
    };
  },
  created() {
    this.fetchExtractData();
  },
  computed: {
    filteredItems() {
      // Search by name or transfer type     
      if (this.search) {
        return this.details.filter((item) => {
          return (item.actor
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
            item.status
              .toLowerCase()
              .includes(this.search.toLowerCase()));
        });
      }

      // Filter by entry
      return this.filterBySelected == 'CREDIT' ?
        this.details.filter((item) => item.entry.includes(ENTRY_TYPE.CREDIT)) :
        this.filterBySelected == 'DEBIT' ?
          this.details.filter((item) => item.entry.includes(ENTRY_TYPE.DEBIT)) :
          this.filterBySelected == 'SCHEDULED' ?
            this.details.filter((item) => item.scheduled === true) :
            this.details;
    },
  },
  methods: {
    async fetchExtractData() {
      try {
        const { data } = await getData();
        this.items = data.results;
        this.items.map(el => {
          el.items.forEach(result => {
            this.details.push(result);
            this.renderTransactionStatus();
          });
        });
      } catch (error) {
        console.error('Failed to fetch extract data ', error);
      }
    },
    // Render transaction status according status, entry and souce type
    renderTransactionStatus() {
      this.details.forEach(result => {
        const STATUS_COMPLETED = result.status == STATUS_TYPE.COMPLETED;
        const STATUS_REFUNDED = result.status == STATUS_TYPE.REFUNDED;
        const STATUS_PENDING = result.status == STATUS_TYPE.PENDING;
        const ENTRY_DEBIT = result.entry == ENTRY_TYPE.DEBIT;
        const ENTRY_CREDIT = result.entry == ENTRY_TYPE.CREDIT;
        const SOURCE_PAYMENT = result.source == SOURCE_TYPE.PAYMENT;
        const SOURCE_TRANSFER = result.source == SOURCE_TYPE.TRANSFER;

        // TIP: pass this transaction type in backend, for example: "transactionType: 'payment debit'"....
        if (STATUS_COMPLETED && ENTRY_DEBIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_DEBIT, result.type = 'scheduled';
        if (STATUS_COMPLETED && ENTRY_DEBIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_DEBIT, result.type = 'scheduled';
        if (STATUS_COMPLETED && ENTRY_CREDIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_CREDIT, result.type = 'credit';
        if (STATUS_COMPLETED && ENTRY_CREDIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_CREDIT, result.type = 'credit';
        if (STATUS_REFUNDED && ENTRY_CREDIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_REFUNDED, result.type = 'refunded';
        if (STATUS_REFUNDED && ENTRY_CREDIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_REFUNDED, result.type = 'refunded';
        if (STATUS_PENDING && ENTRY_DEBIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_PENDING, result.type = 'scheduled';
        if (STATUS_PENDING && ENTRY_DEBIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_PENDING, result.type = 'scheduled';
      });
    },
  },
} 
</script>
<style lang="scss">
@import '@/shared/components/RadioButton/RadioButton.scss';
@import '@/shared/components/Search/Search.scss';

.content {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 780px) {
    width: 100%;
  }

  .filter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    align-items: center;

    @media (max-width: 780px) {
      justify-content: center;
      flex-direction: column;
    }
  }

  .credit {
    color: var(--secondary-color);

    &:before {
      content: '+ ';
    }
  }

  .scheduled {
    color: var(--primary-color);

    &:before {
      content: '- ';
    }
  }

  .refunded {
    text-decoration: line-through;
  }
}
</style>