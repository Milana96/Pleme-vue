import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue';
import NotFound404 from '../components/NotFound404.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import ContactDashboard from '../components/ContactDashboard.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ShippingDetails from '../components/ShippingDetails.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import Checkout from '../components/shop/Checkout.vue';
import JewelryCare from '../components/shop/JewelryCare.vue';
import PrivacyPolicy from '../components/shop/PrivacyPolicy.vue';
import Shipping from '../components/shop/Shipping.vue';
import ShoppingCart from '../components/shop/ShoppingCart.vue';
import Accessories from '../components/shop/products/Accessories.vue';
import Earrings from '../components/shop/products/Earrings.vue';
import Necklaces from '../components/shop/products/Necklaces.vue';
import Rings from '../components/shop/products/Rings.vue';
import Other from '../components/shop/products/Other.vue';
import Earring from '../components/shop/product/Earring.vue';
import MostWantedProduct from '../components/shop/product/MostWantedProduct.vue';
import MostWantedSingle from '../components/shop/product/MostWantedSingle.vue';
import Necklace from '../components/shop/product/Necklace.vue';
import OtherAccessories from '../components/shop/product/OtherAccessories.vue';
import Product from '../components/shop/product/Product.vue';
import Ring from '../components/shop/product/Ring.vue';
import SingleProduct from '../components/shop/product/SingleProduct.vue';
import Blog from '../components/shop/blog/Blog.vue';
import BlogArticle from '../components/shop/blog/BlogArticle.vue';
import SingleArticle from '../components/shop/blog/SingleArticle.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/NotFound404', component: NotFound404},
  {path: '/About', component: About},
  {path: '/Contact', component: Contact},
  {path: '/ContactDashboard', component: ContactDashboard},
  {path: '/Header', component: Header},
  {path: '/Footer', component: Footer},
  {path: '/ShippingDetails', component: ShippingDetails},
  {path: '/SignIn', component: SignIn},
  {path: '/SignUp', component: SignUp},
  {path: '/Checkout', component: Checkout},
  {path: '/JewelryCare', component: JewelryCare},
  {path: '/PrivacyPolicy', component: PrivacyPolicy},
  {path: '/Shipping', component: Shipping},
  {path: '/ShoppingCart', component: ShoppingCart},
  {path: '/Accessories', component: Accessories},
  {path: '/Earrings', component: Earrings},
  {path: '/Necklaces', component: Necklaces},
  {path: '/Rings', component: Rings},
  {path: '/Other', component: Other},
  {path: '/MostWantedProduct', component: MostWantedProduct},
  {path: '/MostWantedSingle', component: MostWantedSingle},
  {path: '/Necklace', component: Necklace},
  {path: '/Earring', component: Earring},
  {path: '/OtherAccessories', component: OtherAccessories},
  {path: '/Product', component: Product},
  {path: '/Ring', component: Ring},
  {path: '/Product/:id', component: SingleProduct},
  {path: '/Mostwanted/:id', component: MostWantedSingle},
  {path: '/Blog', component: Blog},
  {path: '/Blog/:id', component: SingleArticle},
  {path: '/BlogArticle', component: BlogArticle},
]


const router = new VueRouter({
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
