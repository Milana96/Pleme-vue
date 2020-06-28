<template>
  <div>
   <section id="necklaces" class="top-section margin-top">
      <div class="gold-clip-section">
         <img src="../../../../public/src/images/20200202_191307.jpg">
      </div>

      <div class="drop-earring-section">
        <img src="../../../../public/src/images/IMG_20190928_142843_611.jpg">
      </div>

       <div class="top-section-text">
       <h1 class="heading-1">{{ $t("headings.necklace1") }}</h1>
       <h4 class="heading-1">{{ $t("headings.necklace2") }}</h4>
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
              :disableButton="product.disableButton"
              :galery_image="product.galery_image"
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
          <option class="select-items" value="Gold necklaces">{{
            $t("accessories.goldNecklace")
          }}</option>
          <option class="select-items" value="Silver necklaces">{{
            $t("accessories.silverNecklace")
          }}</option>
        </select>
      </div>
    </div>
    <!-- End of Filter by name / sort by type -->

    <section class="shop-all filter-other-products">
         <necklace v-for="necklace in $store.state.currentPost"
               :key="necklace.id"
               :id="necklace.id"
               :image="necklace.image"
               :name="necklace.name"
               :price="necklace.price"
               :quantity="necklace.quantity"
               :stock="necklace.stock"
               :totalPrice="necklace.totalPrice"
               :size="necklace.size"
               :hover_image="necklace.hover_image"
               :disableButton="necklace.disableButton"
               :galery_image="necklace.galery_image"
               ></necklace>
    </section>
    <pagination></pagination>
  </div>
</template>

<script>
import ShoppingCartVue from '../ShoppingCart.vue'
import MostWantedProductVue from '../product/MostWantedProduct.vue'
import Necklace from '../product/Necklace.vue'
import PaginationVue from '../Pagination.vue'

export default {
  data () {
    return {
      url: 'necklaces',
      allProducts: "",
      search: ""
    }
  },
  components: {
    'mostWantedProduct': MostWantedProductVue,
    'shoppingCart': ShoppingCartVue,
    'necklace': Necklace,
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
