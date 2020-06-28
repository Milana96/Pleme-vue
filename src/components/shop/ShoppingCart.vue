<template>
  <div class="cart-section">
    <div class="cart">
      <button class="btn-cart" data-toggle="modal" data-target="#shoppingCart">
        <font-awesome-icon icon="shopping-cart" />
        ({{ numInCart }})
      </button>
      <div id="shoppingCart" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <font-awesome-icon icon="shopping-cart" />
              <h5 class="modal-title">{{ $t("shoppingCart.shoppingCart") }}</h5>
              <button class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <th>{{ $t("shoppingCart.product") }}</th>
                  <th>{{ $t("shoppingCart.name") }}</th>
                  <th>{{ $t("shoppingCart.price") }}</th>
                  <th>{{ $t("shoppingCart.quantity") }}</th>
                  <th>{{ $t("shoppingCart.stock") }}</th>
                </thead>
                <tbody v-if="cart">
                  <tr :key="index" v-for="(item, index) in cart">
                    <td>
                      <img
                        :src="item.image"
                        alt=""
                        height="100px"
                        width="100px"
                      />
                    </td>
                    <td>{{ item.name }}</td>
                    <td class="price">{{ item.price | rsd(item.price) }}</td>
                    <td>
                      <button :disabled="item.quantity >= item.stock" @click="increaseCount(item)" class="plus-minus">
                        <font-awesome-icon icon="plus" />
                      </button>
                      {{ item.quantity }}
                      <button :disabled="item.quantity <= 1" @click="decreaseCount(item)" class="plus-minus">
                        <font-awesome-icon icon="minus" />
                      </button>
                    </td>
                    <td>{{ item.stock }}</td>
                    <td>
                      <button class="plus-minus"
                        @click="removeItem(item)">
                        <font-awesome-icon icon="times" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th v-if="total" class="total">{{ $t("shoppingCart.total") }} {{ total | rsd(total) }}</th>
                  </tr>
                </tbody>
              </table>
               <p v-if="cart == false" class="successfuly empty-cart">
                  {{ $t("shoppingCart.empty") }}
                  <font-awesome-icon icon="shopping-cart" />
              </p>
            </div>
            <div class="modal-footer">
              <router-link
                to="/Accessories#shop"
                tag="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="openMenu"
                >{{ $t("shoppingCart.keepShopping") }}</router-link
              >
              <!-- <button class="btn btn-primary">Check out</button> -->
              <router-link
                to="/Checkout#checkout"
                tag="button"
                class="btn btn-primary"
                data-dismiss="modal"
                @click="openMenu"
                >{{ $t("shoppingCart.checkout") }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MostWantedProductVue from "../shop/product/MostWantedProduct";

export default {
  data() {
    return {
      url: "products",
      enable: false
    };
  },
  filters: {
    rsd(value) {
      return value + " rsd";
    }
  },
  computed: {
    inCart() {
      return this.$store.state.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.state.inCart;
    },
    total() {
      return this.$store.state.inCart.reduce(
        (prev, next) => prev + next.totalPrice,
        0
      );
    }
  },
  methods: {
    increaseCount(item) {
      this.$store.commit("increaseCount", item);
    },
    decreaseCount(item) {
      this.$store.commit("decreaseCount", item);
    },
    removeItem(item) {
      this.$store.dispatch('removeItem', item);
    },
    openMenu() {
      const body = document.body;
      if (this.showMenu) {
        // this.hideMenu = false
        this.showMenu = false;
        body.classList.remove("overflow");
      } else {
        // this.hideMenu = true;
        this.showMenu = true;
        body.classList.add("overflow");
      }
    }
  },
  components: {
    mostWantedProduct: MostWantedProductVue
  },
  mounted() {
    if(localStorage.inCart) {
      // this.$store.state.inCart = localStorage.inCart
      this.$store.state.inCart = JSON.parse(localStorage.inCart)
    }
  },
  // watch: {
  //   cart(newCart) {
  //     localStorage.inCart = newCart
  //   }
  // }
};
</script>

<style lang=""></style>
