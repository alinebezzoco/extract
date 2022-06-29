<template>
    <div class="table">
        <div class="table-header">
            <p v-for="field in fields" :key='field'>{{ field }}</p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    props: {
        fields: Array
    }
}
</script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    justify-content: flex-start;

    p {
        display: inline-block;
        font-weight: 400;
        font-size: 14px;
        text-align: left;
        padding: 0 60px;
        width: 150px;
        color: var(--gray-400);

        &:nth-of-type(3) {
            color: var(--primary-color);
        }

        &:last-of-type {
            text-align: right;
        }

        @media(max-width: 780px) {
            font-size: 12px;
            padding: 0 20px;
        }

    }
}
</style>