<template>
    <div class="table-body">
        <slot v-for="(result, index) in items" :key="index">
            <div class="table-header">
                <p>{{ $dateFormat.formatDateDM(result.date) }}</p>
                <span class="vertical-line"></span>
            </div>
            <div class="table-content">
                <div v-for="(item, i) in result.items" :key="i" class="table-results">
                    <img :src="require(`@/assets/icons/${item.type}.svg`)" :alt="item.status" :title="item.status">
                    <p>{{ item.actor }}</p>
                    <p>{{ item.status }}</p>
                    <p>{{ $dateFormat.formatDateDMYH(item.dateEvent) }}</p>
                    <p :class="item.type">{{ $currencyFormat.convertToBRL(item.amount) }}</p>
                </div>
            </div>
            <div class="table-footer">
                <p>saldo do dia: <strong>{{ $currencyFormat.convertToBRL(result.amountTotal) }}</strong></p>
            </div>
        </slot>

        <div class="table-content" v-if="filteredItems">
            <div v-for="(item, index) in filteredItems" :key="index" class="table-results">
                <img :src="require(`@/assets/icons/${item.type}.svg`)" :alt="item.status" :title="item.status">
                <p>{{ item.actor }}</p>
                <p>{{ item.status }}</p>
                <p>{{ $dateFormat.formatDateDMYH(item.dateEvent) }}</p>
                <p :class="item.type">{{ $currencyFormat.convertToBRL(item.amount) }}</p>
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
    .vertical-line {
        height: 20px;
        top: 30px;
        left: 33px;
        width: 1px;
        background: var(--gray-300);
        position: absolute;
    }

    .table-header {
        display: flex;
        font-weight: 900;
        font-size: 12px;
        line-height: 35px;
        padding-left: 20px;
        color: var(--gray-500);
        position: relative;
        height: 50px;

        p {
            margin: 0;
        }

        @media(max-width: 780px) {
            padding-left: 0;
        }

        &:first-child {
            top: -5px;
        }


        &:last-child {
            width: 0;
        }
    }
}

.table-content {
    border-radius: 8px;
    border: 1px solid var(--gray-300);

    .table-results {
        display: flex;
        justify-content: flex-start;

        padding: 16px 0 16px 16px;

        @media (max-width: 780px) {
            padding: 0 0 0 8px;
        }

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
                padding: 8px;
            }

        }

        img {
            @media (max-width: 780px) {
                margin: 20px auto;
                width: 24px;
                height: 24px;
            }
        }


    }

    &:last-child {
        margin-top: 60px;
    }
}

.table-footer {
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    position: relative;
    height: 30px;

    .vertical-line {
        height: 20px;
        top: 248px;
        left: 33px;
        width: 1px;
        background: var(--gray-300);
        position: absolute;

        &:last-child {
            width: 0;
        }
    }
}
</style>
