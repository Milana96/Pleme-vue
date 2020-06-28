<template>
  <div>
    <section id="rings" class="top-section margin-top">
      <div class="gold-clip-section">
        <img src="../../../../public/src/images/20200126_112242.jpg">
      </div>

      <div class="drop-earring-section">
        <img src="../../../../public/src/images/IMG_20181101_210801_083.jpg">
      </div>

       <div class="top-section-text">
       <h1 class="heading-1">{{ $t("headings.ring1") }}</h1>
       <h4 class="heading-1">{{ $t("headings.ring2") }}</h4>
      </div>
    </section>
    <div class="heading">
      <h1>Recommendations for you</h1>
    </div>
    <section class="most-wanted">
      <most-wanted-product v-for="product in $store.state.products.slice(1,5)"
              :key="product.id"
              :id="product.id"
              :image="product.image"
              :name="product.name"
              :price="product.price"
              :quantity="product.quantity"
              :stock="product.stock"
              :totalPrice="product.totalPrice">
      </most-wanted-product>
    </section>
    
    <div class="heading">
      <h1>{{ $t("mostWanted.shopAll") }}</h1>
    </div>

    <section class="shop-all">
      <ring v-for="ring in $store.state.products"
            :key="ring.id"
            :id="ring.id"
            :image="ring.image"
            :name="ring.name"
            :price="ring.price"
            :quantity="ring.quantity"
            :stock="ring.stock"
            :totalPrice="ring.totalPrice"
            :size="ring.size"
            :hover_image="ring.hover_image"
            :disableButton="ring.disableButton"
            :galery_image="ring.galery_image"
            >
      </ring>
    </section>
  </div>
</template>

<script>
import ShoppingCartVue from '../ShoppingCart.vue'
import MostWantedProductVue from '../product/MostWantedProduct.vue'
import Ring from '../product/Ring'

export default {
  data () {
    return {
      url: 'rings'
    }
  },
  components: {
    'mostWantedProduct': MostWantedProductVue,
    'shoppingCart': ShoppingCartVue,
    'ring': Ring
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch('getProducts', this.url)
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
