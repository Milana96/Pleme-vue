<template>
  <div>
    <div
      class="single-product"
      v-if="mostWantedProduct"
      :id="mostWantedProduct.id"
    >
      <div class="product-left">
        <img :src="mostWantedProduct.image" alt="" />
        <img class="galery_image" v-if="mostWantedProduct.galery_image" :src="mostWantedProduct.galery_image" alt="" />
      </div>
      <div class="product-right">
        <h6 class="title">{{ mostWantedProduct.name }}</h6>
        <p class="price">
          {{ mostWantedProduct.price }} {{ $t("singleProduct.currency") }}
        </p>
        <p class="description-title">{{ $t("singleProduct.description") }}</p>
        <div class="description">
          {{ mostWantedProduct.description }}
        </div>
        <p class="description-title">{{ $t("singleProduct.details") }}</p>
        <div class="details">
          <ul>
            <li v-if="mostWantedProduct.details[0].title">
              <span>{{ $t("singleProduct.title") }}: </span>
              {{ mostWantedProduct.details[0].title }}
            </li>
            <li v-if="mostWantedProduct.details[0].material">
              <span>{{ $t("singleProduct.material") }}: </span>
              {{ mostWantedProduct.details[0].material }}
            </li>
            <li v-if="mostWantedProduct.details[0].weight">
              <span>{{ $t("singleProduct.weight") }}: </span
              >{{ mostWantedProduct.details[0].weight }}
            </li>
            <li v-if="mostWantedProduct.details[0].height">
              <span>{{ $t("singleProduct.height") }}: </span
              >{{ mostWantedProduct.details[0].height }}
            </li>
            <li v-if="mostWantedProduct.details[0].size">
              <span>{{ $t("singleProduct.size") }}: </span
              >{{ mostWantedProduct.details[0].size }}
            </li>
            <li v-if="mostWantedProduct.details[0].color">
              <span>{{ $t("singleProduct.color") }}: </span
              >{{ mostWantedProduct.details[0].color }}
            </li>
            <li v-if="mostWantedProduct.details[0].width">
              <span>{{ $t("singleProduct.width") }}: </span
              >{{ mostWantedProduct.details[0].width }}
            </li>
            <li v-if="mostWantedProduct.details[0].size">
              <span>{{ $t("singleProduct.size") }}: </span
              >{{ mostWantedProduct.details[0].size }}
            </li>
          </ul>
        </div>
        <div class="single-product-cart">
          <button
            @click="addToCart({ mostWantedProduct })"
             :id="id"
             v-if="!disable"
             :disabled="mostWantedProduct.stock == 0 || disable" 
             class="product-btn single-product-btn"
          >
            {{ $t("mostWanted.addToCart") }}
          </button>
          <button 
              v-if="disable" 
              :disabled="disable" 
              class="product-btn view-cart single-product-btn"
            >
              {{ $t("mostWanted.addedToCart") }}
            </button>
        </div>
      </div>
    </div>
    <section class="offers offers-single">
      <div class="quality">
        <font-awesome-icon icon="gem" />
        <div class="grid-child">
          <p>{{ $t("offers.quality") }}</p>
        </div>
      </div>
      <div class="safe">
        <font-awesome-icon icon="lock" />
        <div class="grid-child">
          <p>{{ $t("offers.safe") }}</p>
        </div>
      </div>
      <div class="delivery">
        <font-awesome-icon icon="fighter-jet" />
        <div class="grid-child">
          <p>{{ $t("offers.delivery") }}</p>
        </div>
      </div>
      <div class="shipping">
        <font-awesome-icon icon="gift" />
        <div class="grid-child">
          <p>{{ $t("offers.shipping") }}</p>
        </div>
      </div>
    </section>
    <div class="heading">
      <h1>{{ $t("homePage.mostWanted") }}</h1>
    </div>
    <section class="most-wanted">
      <most-wanted-product
        v-for="product in $store.state.products.slice(1,5)"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
        :stock="product.stock"
        :totalPrice="product.totalPrice"
        :size="product.size"
      ></most-wanted-product>
    </section>
  </div>
</template>

<script>
import ShoppingCartVue from "../ShoppingCart.vue";
import MostWantedProductVue from "../product/MostWantedProduct.vue";

export default {
  data() {
    return {
      mostWantedProduct: null,
      disable: false
    };
  },
  watch: {
    $route() {
      this.fetchProduct();
    }
  },
  created() {
    this.fetchProduct();
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'removeItem') {
        if (state.enable) {
          this.disable = false;
        }
      }
    }),
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'decreaseCount') {
        if (state.enable) {
          this.disable = false;
        }
      }
    })
  },
  props: [
    "id",
    "name",
    "image",
    "price",
    "quantity",
    "stock",
    "totalPrice",
    "type",
    "size"
  ],
  methods: {
    fetchProduct() {
      const mostWantedProduct = this.$store.state.products.find(
        e => e.id == this.$route.params.id
      );

      if (mostWantedProduct) {
        this.mostWantedProduct = mostWantedProduct;
        console.log(this.mostWantedProduct);
        return;
      }

      this.$router.replace("/NotFound404");
    },
      addToCart({ mostWantedProduct }) {
      let id = mostWantedProduct.id;
      let name = mostWantedProduct.name;
      let image = mostWantedProduct.image;
      let price = mostWantedProduct.price;
      let quantity = mostWantedProduct.quantity;
      let stock = mostWantedProduct.stock;
      let totalPrice = mostWantedProduct.totalPrice;
      let type = mostWantedProduct.type;
      let size = mostWantedProduct.size;
      console.log(mostWantedProduct.quantity);
      
      let cantAdd = this.$store.state.inCart.find(el => el.id == id);
      if (cantAdd) {
          if (cantAdd.quantity < cantAdd.stock) {
            cantAdd.quantity = parseInt(
            cantAdd.quantity + 1
            );
            cantAdd.totalPrice = parseInt(
            cantAdd.price * cantAdd.quantity
            );
          } 
          if (cantAdd.quantity == cantAdd.stock) {
            this.disable = true;
          } else {
            this.disable = false;
          }
      } else {
        quantity = 1;
        this.$store.dispatch("addToCart", { id, image, name, price, quantity, stock, totalPrice, type, size});
      }
    }
    
  },
  components: {
    shoppingCart: ShoppingCartVue,
    mostWantedProduct: MostWantedProductVue
  }
};
</script>
