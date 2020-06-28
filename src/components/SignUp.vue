<template>
  <div id="signup">
    <contact-dashboard-vue></contact-dashboard-vue>
    <div class="sign-form">
      <sign-up-form></sign-up-form>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20014.63322934575!2d19.821065245758646!3d45.26379730075448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2sNovi%20Sad!5e0!3m2!1sen!2srs!4v1579460729420!5m2!1sen!2srs"
          width="100%"
          height="600"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from './SignUpForm.vue';
import ContactDashboardVue from './ContactDashboard.vue';
export default {
  components: {
    signUpForm: SignUpForm,
    contactDashboardVue: ContactDashboardVue
  }
}
</script>
