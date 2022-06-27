<template>
    <tbody v-bind="$attrs">
        <slot v-for="(result, index) in items" :key="index">
            <td>
            <th>{{ $dateFormat.formatDateDMY(result.date) }}</th>
            </td>
            <tr v-for="(item, i) in result.items" :key="i">
                <td>{{ item.actor }}</td>
                <td>{{ item.status }}</td>
                <td>{{ $dateFormat.formatDateDMH(item.dateEvent) }}</td>
                <td>{{ $currencyFormat.convertToBRL(item.amount) }}</td>
            </tr>
            <td>
            <th>Saldo do dia: {{ $currencyFormat.convertToBRL(result.amountTotal) }}</th>
            </td>
        </slot>
    </tbody>
    <tbody v-bind="$attrs">
        <tr v-for="(item, index) in filteredItems" :key="index">
            <td>{{ item.actor }}</td>
            <td>{{ item.status }}</td>
            <td>{{ $dateFormat.formatDateDMH(item.dateEvent) }}</td>
            <td>{{ $currencyFormat.convertToBRL(item.amount) }}</td>
        </tr>
    </tbody>
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

<style>
</style>