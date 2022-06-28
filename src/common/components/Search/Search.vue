<template>
  <label for="id">{{ label }}</label>
  <input type="text" :value="value" :name="name" :id="id" :placeholder="placeholder" data-testid="search-filter"
    @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "SearchComponent",
  props: {
    value: String,
    id: String,
    name: String,
    placeholder: String,
    label: String
  },
};
</script>