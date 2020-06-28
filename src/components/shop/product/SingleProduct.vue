<template>
  <div>
    <div class="single-product" v-if="product" :id="product.id">
      <div class="product-left">
        <img :src="product.image" alt="" />
        <img class="galery_image" v-if="product.galery_image" :src="product.galery_image" alt="" />
      </div>
      <div class="product-right">
        <h6 class="title">{{ product.name }}</h6>
        <p class="price">
          {{ product.price }} {{ $t("singleProduct.currency") }}
        </p>
        <p class="description-title">
          <font-awesome-icon icon="comment" />
          {{ $t("singleProduct.description") }}
        </p>
        <div class="description">
          {{ product.description }}
        </div>
        <p class="description-title">
          <font-awesome-icon icon="bahai" />
          {{ $t("singleProduct.details") }}
        </p>
        <div class="details">
          <ul>
            <li v-if="product.details[0].title">
              <span>{{ $t("singleProduct.title") }}: </span>
              {{ product.details[0].title }}
            </li>
            <li v-if="product.details[0].material">
              <span>{{ $t("singleProduct.material") }}: </span>
              {{ product.details[0].material }}
            </li>
            <li v-if="product.details[0].weight">
              <span>{{ $t("singleProduct.weight") }}: </span
              >{{ product.details[0].weight }}
            </li>
            <li v-if="product.details[0].height">
              <span>{{ $t("singleProduct.height") }}: </span
              >{{ product.details[0].height }}
            </li>
            <li v-if="product.details[0].color">
              <span>{{ $t("singleProduct.color") }}: </span
              >{{ product.details[0].color }}
            </li>
            <li v-if="product.details[0].width">
              <span>{{ $t("singleProduct.width") }}: </span
              >{{ product.details[0].width }}
            </li>
            <li v-if="product.details[0].size">
              <span>{{ $t("singleProduct.size") }}: </span
              >{{ product.details[0].size }}
            </li>
          </ul>
        </div>
        <div class="size-quantity">
          <div>
            <button 
              :id="id"
              v-if="!disable"
              :disabled="product.stock == 0 || disable" 
              class="product-btn single-product-btn" 
              @click="addToCart({ product })"
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
      product: null,
      disable: false
    };
  },
  watch: {
    $route() {
      this.fetchProduct();
    }
  },
  created() {
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
    }),
    this.fetchProduct();
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
    // fetchSingleProduct() {
    //   this.$store.dispatch("getSingleProduct", this.$route.params.id);
    // },
    fetchProduct() {
      const product = this.$store.state.products.find(
        e => e.id == this.$route.params.id
      );

      if (product) {
        this.product = product;
        // console.log(this.product);
        return;
      }

      this.$router.replace("/NotFound404");
    },
    addToCart({ product }) {
      let id = product.id;
      let name = product.name;
      let image = product.image;
      let price = product.price;
      let quantity = product.quantity;
      let stock = product.stock;
      let totalPrice = product.totalPrice;
      let type = product.type;
      let size = product.size;
      console.log(product.quantity);
      
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
