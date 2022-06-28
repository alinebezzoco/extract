<template>
  <Header title="Extrato" />
    <Extract />
</template>

<script>
import Extract from '@/views/Extract/Extract.vue';
import Header from '@/shared/components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Extract,
    Header
  },
}
</script>

<style lang="scss">
@import './index.css';
</style>
