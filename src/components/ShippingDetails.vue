<template>
  <div class="checkout-form">
    <form @submit.prevent="onSubmit">
      <h6 class="form-heading">{{ $t("shippingDetails.shippingInfo") }}</h6>
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
      <div class="input" :class="{ invalid: $v.first_name.$error }">
        <label for="first_name">{{ $t("shippingDetails.firstName") }}</label>
        <input
          type="first_name"
          id="first_name"
          @blur="$v.first_name.$touch()"
          v-model="first_name"
        />
        <p v-if="$v.first_name.$error">{{ $t("validations.required") }}</p>
      </div>
      <div class="input" :class="{ invalid: $v.last_name.$error }">
        <label for="last_name">{{ $t("shippingDetails.lastName") }}</label>
        <input
          type="last_name"
          id="last_name"
          @blur="$v.last_name.$touch()"
          v-model="last_name"
        />
        <p v-if="$v.last_name.$error">{{ $t("validations.required") }}</p>
      </div>
      <div class="input" :class="{ invalid: $v.address.$error }">
        <label for="address">{{ $t("shippingDetails.address") }}</label>
        <input
          type="address"
          id="address"
          @blur="$v.address.$touch()"
          v-model="address"
        />
        <p v-if="$v.address.$error">{{ $t("validations.required") }}</p>
      </div>
      <div class="input" :class="{ invalid: $v.city.$error }">
        <label for="city">{{ $t("shippingDetails.city") }}</label>
        <input type="city" id="city" @blur="$v.city.$touch()" v-model="city" />
        <p v-if="$v.city.$error">{{ $t("validations.required") }}</p>
      </div>
      <div class="input country-zip-wrapper">
        <div class="input country-zip" :class="{ invalid: $v.country.$error }">
          <label for="country">{{ $t("shippingDetails.country") }}</label>
          <select
            name="country"
            id="country"
            v-model="country"
            @change="checkPhoneNumber(country)"
            @blur="$v.country.$touch()"
          >
            <option class="select-items" value="Bosnia and Herzegovina"
              >{{ $t("shippingDetails.bosnia") }}</option
            >
            <option class="select-items" value="Serbia">{{ $t("shippingDetails.serbia") }}</option>
          </select>
          <p v-if="$v.country.$error">{{ $t("validations.required") }}</p>
        </div>
        <div class="input zip-country" :class="{ invalid: $v.country.$error }">
          <label for="zip_code">{{ $t("shippingDetails.zip") }}</label>
          <input
            type="zip_code"
            id="zip_code"
            @blur="$v.zip_code.$touch()"
            v-model="zip_code"
          />
          <p v-if="$v.zip_code.$error">{{ $t("validations.required") }}</p>
        </div>
      </div>
      <div class="input" :class="{ invalid: $v.phone_number.$error }">
        <label for="phone_number">{{ $t("shippingDetails.phoneNumber") }}</label>
        <div class="phone-country">
          <span>{{ country_number }}</span>
          <input
            type="phone"
            id="phone_number"
            @blur="$v.phone_number.$touch()"
            v-model="phone_number"
          />
        </div>
        <p v-if="$v.phone_number.$error">{{ $t("validations.required") }}</p>
        <p v-if="$v.phone_number.$error">{{ $t("validations.validPhone") }}</p>
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
        <p v-if="$v.terms.$error">You must accept terms of conditions.</p>
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
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      url: "products",
      email: "",
      terms: false,
      first_name: "",
      last_name: "",
      address: "",
      country: "Serbia",
      city: "",
      zip_code: "",
      phone_number: "",
      country_number: "+381"
    };
  },
  validations: {
    email: {
      email
    },
    email: {
      required
    },
    first_name: {
      required
    },
    last_name: {
      required
    },
    city: {
      required
    },
    address: {
      required
    },
    country: {
      required
    },
    zip_code: {
      required
    },
    phone_number: {
      required,
      numeric
    },
    terms: {
      required
    }
  },
  filters: {
    rsd(value) {
      return value + " rsd";
    }
  },
  methods: {
    checkPhoneNumber(value) {
      if (value == "Serbia" || value == 'Srbija') {
        this.country_number = "+381";
      } else {
        this.country_number = "+387";
      }
    },
    onSubmit() {
      const shippingData = {
        email: this.email,
        terms: this.terms,
        firstName: this.first_name,
        lastName: this.last_name,
        address: this.address,
        city: this.city,
        country: this.country,
        zipCode: this.zip_code,
        phoneNumber: this.phone_number
      };
      console.log(shippingData);

      this.$store.dispatch("sendShippingData", shippingData);
    }
  }
};
</script>
