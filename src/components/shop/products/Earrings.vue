<template>
  <div>
    <section id="earrings" class="top-section margin-top">
      <div class="gold-clip-section">
         <img src="../../../../public/src/images/20200126_112048.jpg">
      </div>

      <div class="drop-earring-section">
        <img src="../../../../public/src/images/20200126_112002.jpg">
      </div>

       <div class="top-section-text">
       <h1 class="heading-1">{{ $t("headings.earring1") }}</h1>
       <h4 class="heading-1">{{ $t("headings.earring2") }}</h4>
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
              :size="product.size"
              :disableButton="product.disableButton"
              >
      </most-wanted-product>
    </section>
    
    <div class="heading">
      <h1>{{ $t("mostWanted.shopAll") }}</h1>
    </div>

    <!-- Filter by name / sort by type -->
    <div class="search">
      <div class="search-by-name">
        <input
          type="text"
          placeholder="Search by name"
          @change="filterByName(search)"
          v-model="search"
        />
      </div>
      <div class="filterProducts">
        <label for="filter">{{ $t("accessories.refineBy") }}</label>
        <select
          id="allProducts"
          v-model="allProducts"
          @click="filterProducts(allProducts)"
        >
          <option class="select-items" value="" selected>{{
            $t("accessories.all")
          }}</option>
          <option class="select-items" value="Gold stud earrings">{{
            $t("accessories.goldStud")
          }}</option>
          <option class="select-items" value="Gold drop earrings">{{
            $t("accessories.goldDrop")
          }}</option>
        </select>
      </div>
    </div>
    <!-- End of Filter by name / sort by type -->

    <section class="shop-all filter-other-products">
         <earring v-for="earring in $store.state.currentPost"
               :key="earring.id"
               :id="earring.id"
               :image="earring.image"
               :name="earring.name"
               :price="earring.price"
               :quantity="earring.quantity"
               :stock="earring.stock"
               :totalPrice="earring.totalPrice"
               :size="earring.size"
               :hover_image="earring.hover_image"
               :removed="earring.removed"
               :disableButton="earring.disableButton"
               :galery_image="earring.galery_image"
               ></earring>
    </section>
    <pagination></pagination>
  </div>
</template>

<script>
import ShoppingCartVue from '../ShoppingCart.vue'
import MostWantedProductVue from '../product/MostWantedProduct.vue'
import Earring from '../product/Earring.vue'
import PaginationVue from '../Pagination.vue'

export default {
  data () {
    return {
      url: 'earrings',
      search: "",
      allProducts: ""
    }
  },
  components: {
    'mostWantedProduct': MostWantedProductVue,
    'shoppingCart': ShoppingCartVue,
    'earring': Earring,
    'pagination': PaginationVue
  },
  mounted() {
     this.$store.dispatch("getProducts", this.url);
      setTimeout(() => {
        this.$store.dispatch("filterProducts", "");
        this.$store.dispatch("filterByName", "");
      }, 300);
  },
  methods: {
    filterProducts(value) {
      this.$store.dispatch("filterProducts", value);
    },
    filterByName(search) {
      this.$store.dispatch("filterByName", search);
    }
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
