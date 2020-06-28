<template>
  <form @submit.prevent="onSubmit" id="signUp">
    <h6 class="form-heading">{{ $t("signUp.subscribeHeading") }}</h6>
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
      <button class="contact-form-link" type="submit" :disabled="$v.$invalid">
        {{ $t("signUp.subscribeButton") }}
      </button>
  </form>
</template>

<script>
import {
  required,
  email,
} from "vuelidate/lib/validators";
export default {
    data() {
        return {
        email: "",
        };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit() {
      const subscribeData = {
        email: this.email
      };
      this.$store.commit("subscribe", subscribeData);
      console.log(subscribeData);
    }
  }
};
</script>
