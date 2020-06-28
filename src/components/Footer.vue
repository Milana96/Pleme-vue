<template>
  <div>
    <!-- Footer -->
	<footer class="footer_style">

		<div class="social-media">
			<a href="https://www.pinterest.com/milana8380/" target="_blank">
				<p>Pinterest</p>
			</a>
			<a href="https://www.instagram.com/p.l.e.m.e/" target="_blank">
				<p>Instagram</p>
			</a>
			<a href="https://www.facebook.com/PlemeOrnaments/" target="_blank">
				<p>Facebook</p>
			</a>
		</div>

    <div class="navigation-menu">
      <h3>
        {{ $t("bottomNavigation.contactUs") }} 
      </h3>
      <ul>
        <li>Serbia</li>
        <li>Novi Sad 2100</li>
        <li>Email:</li>
        <li>pleme.ornaments@gmail.com</li>
      </ul>
    </div>

		<!-- horiziontal menu -->
		<nav class="navigation-menu">
      <h3>{{ $t("bottomNavigation.onlineService") }}</h3>
			<ul>
        <router-link to="/Shipping" tag="li" active-class="active" exact>
          <font-awesome-icon icon="truck" class="service-icons"/>
          <a>{{ $t("bottomNavigation.shippingReturns") }}</a>
        </router-link>
        <router-link to="/PrivacyPolicy" tag="li" active-class="active" exact>
          <font-awesome-icon icon="user-secret" class="service-icons"/>
          <a>{{ $t("bottomNavigation.privacyPolicy") }}</a>
        </router-link>
        <router-link to="/JewelryCare" tag="li" active-class="active" exact>
        <font-awesome-icon icon="gem" class="service-icons"/>
          <a>{{ $t("bottomNavigation.jewelryCare") }}</a>
        </router-link>
        <router-link to="/Contact" tag="li" active-class="active" exact>
          <font-awesome-icon icon="question" class="service-icons"/>
          <a>{{ $t("bottomNavigation.contact") }}</a>
        </router-link>
			</ul>
		</nav>

    <nav class="navigation-social">
      <h3>{{ $t("bottomNavigation.follow") }}</h3>
			<ul>
				<li>
          <font-awesome-icon :icon="['fab','instagram']" class="service-icons"/>
          <a href="https://www.instagram.com/p.l.e.m.e/" target="_blank">
            Instagram
          </a>
        </li>
				<li>
          <font-awesome-icon :icon="['fab','facebook']" class="service-icons"/>
          <a href="https://www.facebook.com/plemenskinakit/" target="_blank">Facebook</a>
        </li>
				<li>
          <font-awesome-icon :icon="['fab', 'pinterest']" class="service-icons"/>
          <a href="https://www.pinterest.com/milana8380/" target="_blank">Pinterest</a>
          </li>
			</ul>
		</nav>
	</footer>
  <p class="rights"> {{ $t("bottomNavigation.copyright") }} &copy; 2019 P.L.E.M.E </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
  
    }
  }
}
</script>

<style lang="scss">

</style>
