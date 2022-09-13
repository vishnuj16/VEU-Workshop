<template>
  <ProductDetail
    v-for="product in Products"
    :productDetail="product"
    :key="product.id"
  ></ProductDetail>
</template>

<script>
import ProductDetail from './ProductDetail.vue';
import fetchProducts from '../services/index.js';

export default {
  name: 'ProductsList',
  components: {
    ProductDetail,
  },

  async created() {
    console.log('Created');
    this.Products = await fetchProducts();
  },
  beforeMount() {
    console.log('Before Mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.log('Before Update');
  },
  updated() {
    console.log('Updaed');
  },

  data() {
    return {
      Products: [],
    };
  },
};
</script>
