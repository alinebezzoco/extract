<template>
    <input type="radio" :id="id" :name="name" :value="value" v-bind="$attrs" @change="selectedItem" :disabled="disabled" />
    <label :for="id">{{ label }} </label>
</template>

<script>
export default {
    name: 'RadioButtonComponent',
    props: {
        id: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: false
        },
        value: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        isChecked: {
            type: Boolean
        },
    },
    methods: {
        selectedItem() {
            this.$emit('checked', !this.isChecked);
        }
    },
};
</script>

<style lang="scss" scoped>
@import './RadioButton.scss';
</style>