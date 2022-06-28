<template>
    <div class="table-body">
        <div class="table-row">
            <slot v-for="(result, index) in items" :key="index">
                <div class="table-header">
                    <p>{{ $dateFormat.formatDateDMY(result.date) }}</p>
                </div>
                <div class="table-content">
                    <div v-for="(item, i) in result.items" :key="i" class="table-results">
                        <p>{{ item.actor }}</p>
                        <p>{{ item.status }}</p>
                        <p>{{ $dateFormat.formatDateDMH(item.dateEvent) }}</p>
                        <p>{{ $currencyFormat.convertToBRL(item.amount) }}</p>
                    </div>
                </div>
                <div class="table-footer">
                    <p>saldo do dia: <strong>{{ $currencyFormat.convertToBRL(result.amountTotal) }}</strong></p>
                </div>
            </slot>
        </div>

        <div class="table-row">
            <div class="table-content">
                <div v-for="(item, index) in filteredItems" :key="index" class="table-results">
                    <p>{{ item.actor }}</p>
                    <p>{{ item.status }}</p>
                    <p>{{ $dateFormat.formatDateDMH(item.dateEvent) }}</p>
                    <p>{{ $currencyFormat.convertToBRL(item.amount) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableBodyComponent',
    props: {
        items: Array,
        filteredItems: Array,
    }
}
</script>

<style lang="scss" scoped>
.table-body {
    .table-header {
        display: flex;
        font-weight: 900;
        font-size: 12px;
        line-height: 20px;
        padding-left: 20px;
        color: var(--gray-500);

        @media(max-width: 780px) {
            padding-left: 0;
        }

        &:first-child {
            position: relative;
            top: -45px;
        }
    }
}

.table-content {
    border-radius: 8px;
    border: 1px solid var(--gray-300);

    .table-results {
        display: flex;
        justify-content: flex-start;

        p {
            text-align: left;
            padding: 0 20px;
            width: 230px;
            font-size: 16px;

            &:first-of-type {
                color: var(--gray-500);
            }

            &:nth-of-type(2),
            &:nth-of-type(3) {
                color: var(--gray-400);
            }

            &:last-of-type {
                text-align: right;
            }

            @media (max-width: 780px) {
                font-size: 12px;
                padding: 10px;
            }

        }
    }
}

.table-footer {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    justify-content: flex-end;
}
</style>