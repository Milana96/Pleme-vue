import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleDoubleRight, faShoppingCart, faPlus, faMinus, 
       faTimes, faCaretDown, faFighterJet, faGem, faLock, faGift, 
       faTruck, faBahai, faComment, faExchangeAlt, faExclamation, 
       faUserSecret, faCookie, faDatabase, faGifts, faQuestion,
} from '@fortawesome/free-solid-svg-icons'; 
import {faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { i18n } from './plugins/i18n.js';
import FlagIcon from 'vue-flag-icon';
import VAnimateCss from 'v-animate-css';
import VideoBg from 'vue-videobg';
Vue.component('video-bg', VideoBg);
import firebase from "firebase";
 
Vue.use(VAnimateCss);
Vue.use(FlagIcon);
Vue.use(Vuelidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

library.add(faAngleDoubleRight);
library.add(faShoppingCart);
library.add(faPlus);
library.add(faMinus);
library.add(faTimes);
library.add(faCaretDown);
library.add(faFighterJet);
library.add(faGem);
library.add(faLock);
library.add(faGift);
library.add(faTruck);
library.add(faBahai);
library.add(faComment);
library.add(faExchangeAlt);
library.add(faExclamation);
library.add(faUserSecret);
library.add(faCookie);
library.add(faDatabase);
library.add(faGifts);
library.add(faQuestion);
library.add(faFacebook);
library.add(faInstagram);
library.add(faPinterest);

const configOptions = {
  apiKey: "AIzaSyAxzzEvnpQY4I1o3YURyJaXkco5ykjlhCc",
  authDomain: "vue-firebase-auth-2802d.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-2802d.firebaseio.com",
  projectId: "vue-firebase-auth-2802d",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
