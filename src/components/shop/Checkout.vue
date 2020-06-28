<template>
  <div class="checkout-wrapper" id="checkout">
    <div class="heading checkout-heading">
      <h1>{{ $t("shoppingCart.cart") }}</h1>
    </div>
    <section class="checkout" :class="{successfuly: isShipped}">
      <table class="table" v-if="cart != false">
        <thead>
          <th>{{ $t("shoppingCart.product") }}</th>
          <th>{{ $t("shoppingCart.name") }}</th>
          <th>{{ $t("shoppingCart.price") }}</th>
          <th>{{ $t("shoppingCart.quantity") }}</th>
          <th>{{ $t("shoppingCart.stock") }}</th>
        </thead>
        <p v-if="cart == false" class="successfuly empty-cart">
          {{ $t("shoppingCart.empty") }}
          <font-awesome-icon icon="shopping-cart" />
        </p>
        <tbody v-if="cart">
          <tr class="table-rows" :key="index" v-for="(item, index) in cart">
            <td>
              <img :src="item.image" alt="" height="100px" width="100px" />
            </td>
            <td>{{ item.name }}</td>
            <td class="price">{{ item.price }} {{ $t("singleProduct.currency") }}</td>
            <td>
              <button :disabled="item.quantity >= item.stock"
                @click="increaseCount(item)"
                class="plus-minus checkout-component"
              >
                <font-awesome-icon icon="plus" />
              </button>
              {{ item.quantity }}
              <button :disabled="item.quantity <= 1"
                @click="decreaseCount(item)"
                class="plus-minus checkout-component"
              >
                <font-awesome-icon icon="minus" />
              </button>
            </td>
            <td>{{ item.stock }}</td>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th v-if="total" class="total">{{ $t("shoppingCart.total") }} {{ total }} {{ $t("singleProduct.currency") }}</th>
          </tr>
        </tbody>
      </table>
      <shipping-details v-if="!isShipped"></shipping-details>
      <div v-if="isShipped">
          <div class="shipped">
            <p>{{ $t("shoppingCart.deliveryTime") }}</p>
            <p>{{ $t("shoppingCart.patient") }}</p>
             <font-awesome-icon icon="truck" />
            <p>{{ $t("shoppingCart.shipped") }}</p>
            <p>{{ $t("shoppingCart.thanksForBuying") }}</p>
          </div>
      </div> 
    </section>
  </div>
</template>

<script>
import ShippingDetailsVue from '../ShippingDetails.vue';

export default {
  data() {
    return {
      url: "products"
    }
  },
  filters: {
    rsd(value) {
      return value + " rsd";
    }
  },
  computed: {
    isShipped() {
        return this.$store.getters.isShipped
    },
    cart() {
      return this.$store.state.inCart;
    },
    isCartFull() {
      return this.$store.getters.isCartFull
    },
    total() {
      return this.$store.state.inCart.reduce(
        (prev, next) => prev + next.totalPrice,
        0
      )
    }
  },
  methods: {
    increaseCount(item) {
      this.$store.commit("increaseCount", item);
    },
    decreaseCount(item) {
      this.$store.commit("decreaseCount", item);
    }
  },
  components: {
      'shippingDetails': ShippingDetailsVue
  }
}
</script>
