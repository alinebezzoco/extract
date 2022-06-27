<template>
  <Header title="Extrato" />
  <Extract />
</template>

<script>
import Extract from '@/views/Extract/Extract.vue';
import Header from '@/common/components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Extract,
    Header
},
}
</script>

<style>
#app {
  font-family: 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
