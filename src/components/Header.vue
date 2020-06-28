<template>
  <div>
    <header class="top-header">
      <nav
        id="overlay"
        :class="{ hideMenu: this.hideMenu, showMenu: this.showMenu }"
      >
        <div class="logo">
          <router-link to="/">
            <img
              class="logo-img"
              :class="{ fadeIn: this.showMenu }"
              src="../../public/src/images/logo-white.png"
              alt=""
              @click="openMenu"
            />
          </router-link>
        </div>
        <img
          src="../../public/src/images/close-button.png"
          class="close-button"
          @click="openMenu"
        />
        <ul class="top-navigation">
          <router-link to="/#home" tag="li" active-class="active" exact
            ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
              $t("navigation.home")
            }}</a></router-link
          >
          <router-link
            class="openDropdown"
            to="/Accessories#shop"
            tag="li"
            active-class="active"
            exact
          >
            <a :class="{ showMenu: this.showMenu }">
              <span @click="openMenu"> {{ $t("navigation.shop") }} </span>
              <font-awesome-icon
                icon="caret-down"
                class="caret-down"
                @click="showMe"
              />
            </a>
            <div class="dropdown">
              <ul
                class="dropdown-menu"
                :class="displayDropdown ? 'showDropDown' : ''"
              >
                <router-link
                  class="dropdown-li"
                  tag="li"
                  to="/Earrings#earrings"
                  ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
                    $t("navigation.earrings")
                  }}</a></router-link
                >
                <router-link
                  class="dropdown-li"
                  tag="li"
                  to="/Necklaces#necklaces"
                  ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
                    $t("navigation.necklaces")
                  }}</a></router-link
                >
                <router-link class="dropdown-li" tag="li" to="/Rings#rings"
                  ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
                    $t("navigation.rings")
                  }}</a></router-link
                >
                <router-link class="dropdown-li" tag="li" to="/Other#other"
                  ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
                    $t("navigation.other")
                  }}</a></router-link
                >
              </ul>
            </div>
          </router-link>
          <router-link to="/About#about" tag="li" active-class="active" exact
            ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
              $t("navigation.about")
            }}</a></router-link
          >
          <router-link
            to="/Contact#contact"
            tag="li"
            active-class="active"
            exact
            ><a :class="{ showMenu: this.showMenu }" @click="openMenu">{{
              $t("navigation.contact")
            }}</a></router-link
          >
        </ul>
      </nav>
      <shopping-cart></shopping-cart>
      <div class="language-bar">
        <button
          :key="entry.title"
          v-for="entry in languages"
          @click="changeLocale(entry.language)"
        >
          {{ entry.title }}
        </button>
      </div>
      <img
        src="../../public/src/images/hamburger-menu.png"
        class="open-menu"
        value="click me"
        @click="openMenu"
      />
    </header>
  </div>
</template>
<script>
import ShoppingCartVue from "./shop/ShoppingCart.vue";
import { i18n } from "../plugins/i18n.js";
export default {
  data() {
    return {
      hideMenu: false,
      showMenu: false,
      displayDropdown: false,
      languages: [
        { flag: "us", language: "en", title: "EN" },
        { flag: "rs", language: "rs", title: "| RS" }
      ]
    };
  },
  methods: {
    showMe() {
      this.displayDropdown = !this.displayDropdown;
      console.log(this.displayDropdown);
    },
    changeLocale(locale) {
      i18n.locale = locale;
      localStorage.setItem("locale", locale);
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
    shoppingCart: ShoppingCartVue
  },
  mounted() {
    if (localStorage.getItem("locale")) {
      i18n.locale = localStorage.getItem("locale");
    }
  }
};
</script>

<style lang="scss" scoped></style>
