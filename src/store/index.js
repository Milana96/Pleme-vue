import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from 'vue-axios';

Vue.use(VueAxios ,axios);
Vue.use(Vuex);

//MODULES
import auth from '../store/modules/auth';

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    page: 1,
    perPage: 5,
    totalPages: 0,
    filteredProducts: null,
    currentPost: null,
    shipped: false,
    products: [],
    blogs: [],
    singleProduct: null,
    enable: false,
    mostWantedProducts: [
      {
        id: 1,
        type: "Gold drop earrings",
        color: "gold",
        image: "/src/images/trending.jpg",
        price: 1200,
        name: "Gold drop earrings",
        quantity: 0,
        stock: 3,
        totalPrice: 1200, 
        disableButton: false,
        description:
          "Gold earrings are an alliance of delicacy and character in a cosmic and bright design. Eternally chained to freedom: a daring and elegant jewel, plated in 18 carat gold. A design filled with contemporary minimalism in a collection that represents the eternal duality of today’s women: free, dreamer and fighter.",
        details: [
          {
            title: "Gold earring",
            material: "Zinc Alloy",
            weight: "21 g",
            height: "6 cm",
            size: 'One size only'
          }
        ]
      },

      {
        id: 2,
        type: "Gold drop earrings",
        color: "gold",
        image: "/src/images/background_slide2.jpg",
        hover_image: "/src/images/dfgdfg.png",
        price: 1200,
        name: "Gold chain earrings",
        quantity: 0,
        stock: 3,
        totalPrice: 1200, 
        disableButton: false,
        description:
          "New metal geometry chain irregular earrings. Gold earrings are an alliance of delicacy and character in a cosmic and bright design. Eternally chained to freedom: a daring and elegant jewel, plated in 18 carat gold. A design filled with contemporary minimalism in a collection that represents the eternal duality of today’s women: free, dreamer and fighter.",
        details: [
          {
            title: "Gold earring",
            material: "Zinc Alloy",
            weight: "26.5 g",
            height: "5.5 cm",
            size: 'One size only'
          }
        ]
      },
      {
        id: 3,
        type: "Gold drop earrings",
        color: "gold",
        image: "/src/images/gold-drop.png",
        hover_image: "/src/images/sthsrthsrt.png",
        price: 1200,
        name: "Gold drop",
        quantity: 0,
        stock: 3,
        totalPrice: 1200, 
        disableButton: false,
        description:
          "Fashion accessories personality irregular alloy hollow stud earrings accessories. Gold earrings are an alliance of delicacy and character in a cosmic and bright design. Eternally chained to freedom: a daring and elegant jewel, plated in 18 carat gold. A design filled with contemporary minimalism in a collection that represents the eternal duality of today’s women: free, dreamer and fighter.",
        details: [
          {
            title: "Gold earring",
            material: "Zinc Alloy",
            weight: "12 g",
            height: "6 cm",
            size: 'One size only'
          }
        ]
      },
      {
        id: 4,
        type: "Necklaces",
        color: "gold",
        image: "/src/images/fmu.png",
        price: 1200,
        name: "Shell necklace",
        quantity: 0,
        stock: 3,
        totalPrice: 1200, 
        disableButton: false,
        description:
          "Gold earrings are an alliance of delicacy and character in a cosmic and bright design. Eternally chained to freedom: a daring and elegant jewel, plated in 18 carat gold. A design filled with contemporary minimalism in a collection that represents the eternal duality of today’s women: free, dreamer and fighter.",
        details: [
          {
            title: "Gold earring",
            material: "Zinc Alloy",
            weight: "27.8 g",
            height: "5.5 cm",
            size: 'One size only'
          }
        ]
      }
    ],
    inCart: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setArticles(state, payload) {
      state.blogs = payload;
    },
    setSingleProduct(state, payload) {
      state.singleProduct =  state.products.find(el => el.id == payload);
    },
    addToCart(state, payload) {
        state.inCart.push(payload);
        const parsed = JSON.stringify(state.inCart);
        localStorage.setItem("inCart", parsed); 

    },
    updateEnable(state, newValue) {
      Vue.set(state, 'enable', newValue);
    },
    removeItem(state, payload) {
      const removeEl = state.inCart.find(el => el.id == payload.id) 
      state.inCart.splice(removeEl, 1);
    },
    setPages(state) {
      let numberOfPages = Math.ceil(
        state.filteredProducts.length / state.perPage
      );
      state.totalPages = numberOfPages;
    },
    paginate(state) {
      let page = state.page;
      let perPage = state.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      state.currentPost = state.filteredProducts.slice(from, to) ? state.filteredProducts.slice(from, to) : state.products;
    },
    increaseCount(state, payload) {
      if (payload.quantity < payload.stock) {
        const index = state.inCart.findIndex(item => item.id == payload.id);
        state.inCart[index].quantity = parseInt(
          state.inCart[index].quantity + 1
        );
        state.inCart[index].totalPrice = parseInt(
          state.inCart[index].price * state.inCart[index].quantity
        );
      }
    },
    decreaseCount(state, payload) {
      if (payload.quantity >= 2) {
        const index = state.inCart.findIndex(item => item.id == payload.id);
        state.inCart[index].quantity = parseInt(
          state.inCart[index].quantity - 1
        );
        state.inCart[index].totalPrice = parseInt(
          state.inCart[index].totalPrice - state.inCart[index].price
        );
        console.log("Price");
        console.log(state.inCart[index].totalPrice);
      } else {
        console.log("Min quantity is 1.");
      }
      if (payload.quantity < payload.stock) {
        Vue.set(state, 'enable', true);
      }
    },
    setFilter(state, payload) {
      if (payload == "") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          el => el.type == payload
        );
      }
    },
    setfilterByName(state, payload) {
      if (payload == "") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(el =>
          el.name.toLowerCase().includes(payload.toLowerCase())
        );
      }
    },
    subscribe(state, subscribeData) {
      axios
        .post(
          "https://pleme-f3591.firebaseio.com/subscribeData.json",
          subscribeData
        )
        .then(res => console.log("Response" + res))
        .catch(err => console.log(err));
    }
  },
  actions: {
    filterProducts({ commit }, payload) {
      commit("setFilter", payload);
      setTimeout(() => {
        commit("setPages");
        commit("paginate");
      }, 200);
    },
    filterByName({ commit }, payload) {
      commit("setfilterByName", payload);
      setTimeout(() => {
        commit("setPages");
        commit("paginate");
      }, 200);
    },
    removeItem({ commit }, payload) {
     commit("removeItem", payload);
     commit("updateEnable", true);
    },
    getProducts({ commit }, url) {
      var resData = Vue.axios.get(`/src/${url}.json`);
      resData.then(response => {
        commit("setProducts", response.data);
        console.log(response.data);
      });
    },
    getSingleProduct({commit}, payload) {
      commit("setSingleProduct", payload);
    },
    getArticles({commit}, url) {
      var resData = Vue.axios.get(`/src/${url}.json`);
      resData.then(response => {
        commit("setArticles", response.data);
        console.log(response.data);
        
      })
      .catch(err => {
        console.log(err);
        
      })
    },
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    sendShippingData({ commit, state }, shippingData) {
      axios
        .post(
          "https://pleme-f3591.firebaseio.com/shippingData.json",
          shippingData
        )
        .then(res => console.log("Response" + res))
        .catch(err => console.log(err));

      state.shipped = true;

      axios
        .post(
          "https://pleme-f3591.firebaseio.com/buyingData.json",
          state.inCart
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));

      state.inCart = [];
    }
  },
  subscribe({commit}, payload) {
    commit("subscribe", payload);
  },
  getters: {
    isCartFull(state) {
      return state.inCart !== null
    },
    isShipped(state) {
      return state.shipped !== false;
  }
  }
});
