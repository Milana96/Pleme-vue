<template>
  <div>
    <div class="heading" id="home">
      <h1>{{ $t("homePage.latestArrival") }}</h1>
    </div>
    <section class="top-section">
      <div class="gold-clip-section">
        <img src="../../public/src/images/gold-chain.jpg" />
      </div>

      <div class="drop-earring-section">
        <img src="../../public/src/images/dfgdfg.png" />
      </div>

      <div class="top-section-text">
        <h1>{{ $t("homePage.chainDropEarring") }}</h1>
        <router-link to="/Earrings" class="explore-link" tag="h4">{{
          $t("homePage.experienceCollection")
        }}</router-link>
      </div>

      <div class="full-image-section animated fadeOut">
        <img src="../../public/src/images/section3_background.png" alt="" />
      </div>
    </section>

    <section class="discover">
      <transition-group name="fade" tag="div">
        <div class="slider" v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" />
        </div>
      </transition-group>
      <div class="slider-right">
        <div class="slider-text">
          <h1>{{ $t("homePage.twisted") }}</h1>
          <p>{{ $t("homePage.byPleme") }}</p>
          <div class="discover-collection">
            <!-- <h4>{{ $t("homePage.levelUp") }}</h4> -->
            <img
              class="human-heart"
              src="../../public/src/images/heart.png"
              alt=""
            />
            <router-link to="/Earrings" tag="h5">{{
              $t("homePage.discover")
            }}</router-link>
            <font-awesome-icon icon="angle-double-right" />
          </div>
        </div>
      </div>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </section>

    <section class="offers">
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
        :url="url"
      ></most-wanted-product>
    </section>

    <!-- Cookie banner -->
    <cookielaw theme="blood-orange"></cookielaw>

    <!-- Sign Up Popup form -->
    <div id="subscribe">
      <subscribe></subscribe>
       <button class="close" id="close" @click="closeForm">
          &times;
        </button>
    </div>
  </div>
</template>

<script>
import ShoppingCartVue from "./shop/ShoppingCart.vue";
import MostWantedProductVue from "./shop/product/MostWantedProduct";
import axios from "axios";
import CookieLaw from 'vue-cookie-law';
import Subscribe from './Subscribe.vue';
export default {
  components: {
    mostWantedProduct: MostWantedProductVue,
    shoppingCart: ShoppingCartVue,
    cookielaw: CookieLaw,
    subscribe: Subscribe
  },
  data() {
    return {
      url: "products",
      show: true,
      fadeIn: false,
      images: [
        "/src/images/trending.jpg",
        "/src/images/background_slide2.jpg",
        "/src/images/massive-face.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted() {
    this.startSlide();
    this.$store.dispatch("getProducts", this.url);
    this.openForm();
  },
  methods: {
    openForm() {
      var subscribe = document.getElementById("subscribe");
      subscribe.classList.add("animated");
      subscribe.classList.add("fadeIn");
      setTimeout(function() {
        subscribe.style.display = "block";
      }, 3000)
    },
    closeForm() {
      var subscribe = document.getElementById("subscribe");
      subscribe.classList.add("animated");
      subscribe.classList.add("fadeOut"); 
      setTimeout(function() {
        subscribe.style.display = "none";
      }, 1000)
     
    },
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
    displayText() {
      this.fadeIn = true;
    }
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    inCart() {
      return this.$store.state.inCart;
    }
  }
};
</script>

<style lang="scss"></style>
