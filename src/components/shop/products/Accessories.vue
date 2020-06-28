<template>
  <div>
    <section class="shop" id="shop">
      <div class="shop-text">
        <h1>{{ $t("navigation.shop") }}</h1>
        <h4>{{ $t("homePage.levelUp") }}</h4>
      </div>
      <img src="../../../../public/src/images/section3_background.png" alt="" />
    </section>

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
          <option class="select-items" value="Rings">{{
            $t("accessories.rings")
          }}</option>
          <option class="select-items" value="Gold necklaces">{{
            $t("accessories.goldNecklace")
          }}</option>
           <option class="select-items" value="Silver necklaces">{{
            $t("accessories.silverNecklace")
          }}</option>
          <option class="select-items" value="Accessories">{{
            $t("accessories.accessories")
          }}</option>
        </select>
      </div>
    </div>

    <div class="heading recommendations">
      <h1>{{ $t("mostWanted.recommendations") }}</h1>
    </div>
    <section class="most-wanted">
         <product
          v-for="product in $store.state.products.slice(1, 5)"
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :quantity="product.quantity"
          :stock="product.stock"
          :totalPrice="product.totalPrice"
          :size="product.size"
          :hover_image="product.hover_image"
          :disableButton="product.disableButton"
          :galery_image="product.galery_image"
      >
      </product>
    </section>

    <div class="heading">
      <h1>{{ $t("mostWanted.shopAll") }}</h1>
    </div>

    <section class="shop-all">
      <product
        v-for="product in $store.state.currentPost"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
        :stock="product.stock"
        :totalPrice="product.totalPrice"
        :size="product.size"
        :hover_image="product.hover_image"
        :galery_image="product.galery_image"
      >
      </product>
    </section>
    <pagination></pagination> 
  </div>
</template>

<script>
import ShoppingCartVue from "../ShoppingCart.vue";
import MostWantedProductVue from "../product/MostWantedProduct.vue";
import ProductVue from "../product/Product.vue";
import PaginationVue from '../Pagination.vue';

export default {
  data() {
    return {
      url: "products",
      search: "",
      allProducts: ""
    };
  },
  components: {
    mostWantedProduct: MostWantedProductVue,
    shoppingCart: ShoppingCartVue,
    product: ProductVue,
    pagination: PaginationVue
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
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
