<template>
  <div class = 'card'>
  <div class = "image-wrapper">
  <img :src="productDetail.image" />
  </div>
  <div>
    <p :style="{color: 'purple'}" >PRODUCT NAME : {{ productDetail.name }}</p>
    <p :style="{color: 'purple'}">PRICE : {{ productDetail.price }}</p>
    <p :style="{color: 'purple'}">{{ quantityDescription }}</p>
    <p :style="{ color: 'green', fontSize: '25px' }">{{ getTitle }}</p>
    <button class = "btn wishlist-btn" @click= "wishList()">WISHLIST</button>
    <button class = "btn add-to-cart" v-on:click = "addToCart()">ADD TO CART</button> 
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
    };
  },
  props: {
    productDetail: Object,
  },

  computed: {
    quantityDescription() {
      if (this.productDetail.quantity > 10) {
        return 'IN STOCK';
      } else if (this.productDetail.quantity > 0 && this.productDetail.quantity < 10) {
        return this.productDetail.quantity + ' items left';
      } else {
        return 'OUT OF STOCK';
      }
    },
    getTitle() {
      return this.productDetail.name;
    },
  },

  methods: {
    addToCart()
    {
      console.log("Item is addd to Cart");
    },
    wishList() {
      console.log("Item added to wishlist");
    }
  }
};
</script>

<style scoped>


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 15x;
  display: inline-block;
  margin: 15px;
  border-radius: 5px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  height: 350px;
  align-items: center;
  padding: 10px;
}

img {
  width: 100%;
  max-height: 100%;
}

.price {
  font-size: 18px;
  font-weight: 500;
}

.card-actions {
  display: flex;
  justify-content: space-around;
}

.btn {
  padding: 15px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(37, 37, 37);
  color: white;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
}

.add-to-cart{
  width: 170px;
}

.wishlist-btn,
.add-to-cart:hover {
  border: 1px solid rgb(37, 37, 37);
  background-color: white;
  color: rgb(37, 37, 37);
}

.wishlist-btn:hover {
  border: 1px solid rgb(37, 37, 37);
  background-color: rgb(37, 37, 37);
  color: white;
}

.item-wish-listed {
  background-color: rgb(238, 59, 59);
  color: white;
  border-color: rgb(238, 59, 59);
}

</style>