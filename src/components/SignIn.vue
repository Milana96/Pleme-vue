<template>
  <div id="signin">
    <contact-dashboard></contact-dashboard>
    <div class="sign-form">
      <div class="contact-form">
        <form @submit.prevent="onSubmit" class="sign-in" id="signIn">
          <h6 v-if="!reset" class="form-heading signin-heading">{{ $t("contact.touch") }}</h6>
          <h6 v-if="reset" class="form-heading">Forget your password?</h6>
          <div class="input signin-email">
            <label for="email">{{ $t("signUp.mail") }}</label>
            <input v-if="!reset" type="email" id="email" v-model="email" />
            <input v-if="reset" type="email" id="email" v-model="resetEmail" />
          </div>
          <div v-if="!reset" class="input">
            <label for="password">{{ $t("signUp.password") }}</label>
            <input type="password" id="password" v-model="password" />
          </div>
          <a 
            v-if="!reset"
            class="resetPassword" 
            href="#resetPassword" 
            @click="resetPassword"
          >
            Forget your password?
          </a>
          <div class="submit">
            <button href="#conact_style" v-if="!reset" class="contact-form-link" type="submit">
              {{ $t("signUp.submit") }}
            </button>
            <button
              v-if="reset"
              id="contact-form-link"
              class="contact-form-link reset"
              type="submit"
              @click="sendResetEmail"
            >
              RESET PASSWORD
            </button>
          </div>
        </form>
        <!-- End of --- Reset password form -->
        <!-- Reset password success popup -->
        <div id="subscribe">
          <h6>
            {{ $t("signUp.resetPassword") }}
          </h6>
          <button class="close" id="close" @click="closeForm">
            &times;
          </button>
        </div>
        <!-- Reset password success popup -->
      </div>
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
import authaxios from "../router/axios-auth.js";
import ContactDashboardVue from "./ContactDashboard.vue";
import {
  required,
  email
} from "vuelidate/lib/validators";
export default {
  components: {
    contactDashboard: ContactDashboardVue
  },
  data() {
    return {
      email: "",
      resetEmail: "",
      password: "",
      reset: false,
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    openForm() {
      var subscribe = document.getElementById("subscribe");
      subscribe.classList.add("animated");
      subscribe.classList.add("fadeIn");
      subscribe.classList.add("resetEmail");
      setTimeout(function() {
        subscribe.style.display = "block";
      }, 1000)
    },
    closeForm() {
      var subscribe = document.getElementById("subscribe");
      subscribe.classList.add("animated");
      subscribe.classList.add("fadeOut"); 
      setTimeout(function() {
        subscribe.style.display = "none";
      }, 1000)
     
    },
    clearSignInData() {
      this.email = null;
      this.password = null;
    },
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);

      this.$store.dispatch("logIn", {
        email: formData.email,
        password: formData.password
      });
      this.clearSignInData();
    },
    resetPassword() {
      this.reset = true;
      console.log(this.reset);
      
    },
    sendResetEmail() {
      const resetData = {
        resetEmail: this.resetEmail
      }
      this.$store.dispatch("resetPassword", resetData);
      this.reset = false;
      this.openForm();
    }
  }
};
</script>
