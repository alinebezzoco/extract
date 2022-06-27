<template>
  <div class="content">
    <label v-for="(filter, key) in filterByList" :for="key" :key="key"> 
      <input type="radio" name="sortBy" :id="key" v-model="filterBySelected" :value="key" />
      {{ filter }}
    </label>

    <input type="text" v-model="search" placeholder="Pesquisar" id="search-input" />

    <Table :fields="fieldsList">
      <TableBody v-if="!search && filterBySelected == 'ALL'" :items="items">
      </TableBody>
      <TableBody v-else :filteredItems="filteredItems">
      </TableBody>
    </Table>
  </div>
</template>

<script>
import { ENTRY_TYPE, SOURCE_TYPE, TRANSACTION_TYPE, STATUS_TYPE } from '@/common/constants/TransactionType.js';
import { FILTER_TYPE } from '@/common/constants/FilterType.js';
import Table from '@/common/components/Table/Table.vue';
import TableBody from '@/common/components/Table/TableBody.vue';

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
    this.getUserExtractData();
  },
  computed: {
    filteredItems() {
      // Search by name or transfer type     
      if (this.search != "" && this.search) {
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
    async getUserExtractData() {
      const headers = { "Content-Type": "application/json" };
      await fetch("https://bank-extract-default-rtdb.firebaseio.com/.json", { headers })
        .then(response => response.json())
        .then(data => {
          this.items = data.results;
          this.items.map(el => {
            el.items.forEach(result => {
              this.details.push(result);
              this.renderTransactionStatus();
            });
          });
        }).catch(error => {
          console.error("An error occurred. Try again", error);
        });
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
        if (STATUS_COMPLETED && ENTRY_DEBIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_DEBIT;
        if (STATUS_COMPLETED && ENTRY_DEBIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_DEBIT;
        if (STATUS_COMPLETED && ENTRY_CREDIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_CREDIT;
        if (STATUS_COMPLETED && ENTRY_CREDIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_CREDIT;
        if (STATUS_REFUNDED && ENTRY_CREDIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_REFUNDED;
        if (STATUS_REFUNDED && ENTRY_CREDIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_REFUNDED;
        if (STATUS_PENDING && ENTRY_DEBIT && SOURCE_PAYMENT) result.status = TRANSACTION_TYPE.PAYMENT_PENDING;
        if (STATUS_PENDING && ENTRY_DEBIT && SOURCE_TRANSFER) result.status = TRANSACTION_TYPE.TRANSFER_PENDING;
      });
    },
  },
}
</script>
<style lang="css">
.content {
  width: 80%;
  margin: 0 auto;
  display: block;
}

table {
  width: 100%;
  text-align: left;
  margin: 20px 0;
}

table thead:first-of-type {
  position: relative;
  top: 20px;
}

#sort-bar {
  background-color: #f2e0c1;
  padding: 10px;
}

.sort-button {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 100%;
  width: 50px;
}
</style>