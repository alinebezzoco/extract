<template>
    <table>
        <thead>
            <tr>
                <th v-for="field in fields" :key='field'>{{ field }}</th>
            </tr>
        </thead>
        <slot>
        </slot>
    </table>
</template>

<script>
export default {
    name: 'TableComponent',
    props: {
        fields: Array
    }
}
</script>

<style>
</style>