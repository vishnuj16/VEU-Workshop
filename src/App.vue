<template>
  <div id="app">
    <!-- <span v-for="n in 10"></span> -->
    <ProductsList></ProductsList>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue';
import ProductDetail from './components/ProductDetail.vue';

export default {
  name: 'App',
  components: {
    ProductsList,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
