<template>
  <div class="contact-form">
    <form @submit.prevent="onSubmit" id="signUp">
      <h6 class="form-heading">{{ $t("contact.touch") }}</h6>
      <div class="input" :class="{ invalid: $v.email.$error }">
        <label for="email">{{ $t("signUp.mail") }}</label>
        <input
          type="email"
          id="email"
          @blur="$v.email.$touch()"
          v-model="email"
        />
        <p v-if="$v.email.$error">{{ $t("validations.validEmail") }}</p>
        <p v-if="$v.email.$error">{{ $t("validations.required") }}</p>
      </div>
      <div class="input" :class="{ invalid: $v.password.$error }">
        <label for="password">{{ $t("signUp.password") }}</label>
        <input
          type="password"
          id="password"
          @blur="$v.password.$touch()"
          v-model="password"
        />
        <p v-if="$v.password.$error">{{ $t("validations.required") }}</p>
        <p v-if="$v.password.$error">
          {{ $t("validations.validPassword") }}
          {{ $v.password.$params.minLen.min }}
          {{ $t("validations.char") }}
        </p>
      </div>
      <div class="input" :class="{ invalid: $v.confirmPassword.$error }">
        <label for="confirm-password">{{ $t("signUp.confirm") }}</label>
        <input
          type="password"
          id="confirm-password"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        />
        <p v-if="!$v.confirmPassword.sameAs">
          {{ $t("validations.validConfirm") }}
        </p>
      </div>
      <div
        class="input inline checkbox"
        :class="{ invalid: $v.terms.$invalid }"
      >
        <input
          type="checkbox"
          id="terms"
          @change="$v.terms.$touch()"
          v-model="terms"
        />
        <label for="terms">{{ $t("signUp.accept") }}</label>
      </div>
      <div class="submit">
        <button class="contact-form-link" type="submit" :disabled="$v.$invalid">
          {{ $t("signUp.submit") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import authaxios from "../router/axios-auth.js";
import {
  required,
  email,
  minValue,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import ContactDashboardVue from "./ContactDashboard.vue";
export default {
  components: {
    contactDashboard: ContactDashboardVue
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    };
  },
  validations: {
    email: {
      required,
      email
      // unique: val => {
      //   //check if it is empty, bcs if it is then it is uniqe
      //   // and other validators like required take care if the field is empty
      //   if (val === '') return true
      //   // send get request to users.json and check if there is an email that is equal to the one that
      //   // we have entered
      //   // if it is that is an error
      //   // if it isn't the we check if we have keys in response data
      //   // if we don't hav keys then we return true

      //   //uncomment this later
      //   // return axios.get('/users.json?orderBy="email"&equalTo="' + val + '"')
      //   //   .then(res => {
      //   //     console.log(res)
      //   //     return Object.keys(res.data).length === 0
      //   //   })
      // }
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      // sameAs: sameAs('password')
      // vm is instance and we can call it as we want
      sameAs: sameAs(vm => {
        return vm.password;
      })
    },
    terms: {}
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        terms: this.terms
      };
      this.$store.dispatch("signUp", formData);
      console.log(formData);
    }
  }
};
</script>
