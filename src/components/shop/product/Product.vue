<template>
  <div>
    <div class="product" :id="id">
      <router-link :to="`/product/${id}`">
        <div
          class="hover-image"
          :class="!hover_image ? 'no-hover' : ''"
          :style="`background-image: url(${hover_image})`"
        >
          <img :class="{ disabled: stock == 0 }" :src="image" alt="" />
        </div>
      </router-link>
      <h6>{{ name }}</h6>
      <p>{{ price }} rsd.</p>
      <p class="out-stock" v-if="stock == 0">
        {{ $t("mostWanted.outOfStock") }}
      </p>
      <button
        :id="id"
        v-if="!disable"
        :disabled="stock == 0 || disable"
        class="product-btn"
        @click="
          addToCart({
            id,
            image,
            name,
            price,
            quantity,
            stock,
            totalPrice,
            type,
            size,
            disableButton
          })
        "
      >
        {{ $t("mostWanted.addToCart") }}
      </button>
      <button
        v-if="disable"
        :disabled="disable"
        class="product-btn view-cart"
      >
        {{ $t("mostWanted.addedToCart") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disable: false
    };
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
    "size",
    "hover_image",
    "disableButton"
  ],
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'removeItem') {
        if (state.enable) {
          console.log(state.enable);
          console.log(`Updating to ${state.enable}`);
          this.disable = false;
        }
      }
    }),
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'decreaseCount') {
        if (state.enable) {
          console.log(state.enable);
          console.log(`Updating to ${state.enable}`);
          this.disable = false;
        }
      }
    })
  },
  methods: {
    addToCart({ id, image, name, price, quantity, stock, totalPrice, type, size, disableButton}) {
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
        this.$store.dispatch("addToCart", { id, image, name, price, quantity, stock, totalPrice, type, size, disableButton});
      }
      
    }
  }
};
</script>

<style lang=""></style>
