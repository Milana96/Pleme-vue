<template>
  <div>
     <section id="other" class="top-section margin-top">
      <div class="gold-clip-section">
         <img src="../../../../public/src/images/931705851-1757349417.jpg">
      </div>

      <div class="drop-earring-section">
        <img src="../../../../public/src/images/20200126_112025.jpg">
      </div>

       <div class="top-section-text">
       <h1 class="heading-1">{{ $t("headings.other1") }}</h1>
       <h4 class="heading-1">{{ $t("headings.other2") }}</h4>
      </div>
    </section>
    <div class="heading">
      <h1>{{ $t("mostWanted.recommendations") }}</h1>
    </div>
    <section class="most-wanted">
      <most-wanted-product v-for="product in $store.state.products.slice(1, 5)"
              :key="product.id"
              :id="product.id"
              :image="product.image"
              :name="product.name"
              :price="product.price"
              :quantity="product.quantity"
              :stock="product.stock"
              :totalPrice="product.totalPrice"
              :hover_image="product.hover_image"
              :size="product.size"
              :disableButton="product.disableButton">
      </most-wanted-product>
    </section>
    
    <div class="heading">
      <h1>{{ $t("mostWanted.shopAll") }}</h1>
    </div>

    <section class="shop-all">
         <otherAccessories v-for="other in $store.state.currentPost"
               :key="other.id"
               :id="other.id"
               :image="other.image"
               :name="other.name"
               :price="other.price"
               :quantity="other.quantity"
               :stock="other.stock"
               :totalPrice="other.totalPrice"
               :size="other.size"
               :hover_image="other.hover_image"
               :disableButton="other.disableButton"
               :galery_image="other.galery_image"
               ></otherAccessories>
    </section>
    <pagination></pagination>
  </div>
</template>

<script>
import ShoppingCartVue from '../ShoppingCart.vue'
import MostWantedProductVue from '../product/MostWantedProduct.vue'
import OtherAccessories from '../product/OtherAccessories.vue'
import PaginationVue from '../Pagination.vue'

export default {
  data () {
    return {
      url: 'other'
    }
  },
  components: {
    'mostWantedProduct': MostWantedProductVue,
    'shoppingCart': ShoppingCartVue,
    'otherAccessories': OtherAccessories,
    'pagination': PaginationVue
  },
   mounted() {
      this.$store.dispatch("getProducts", this.url);
        setTimeout(() => {
          this.$store.dispatch("filterProducts", "");
          this.$store.dispatch("filterByName", "");
        }, 300);
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
