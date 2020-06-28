<template>
  <div>
    <!-- <video-bg :sources="['../../public/src/images/LoveMeLikeYouDo.mp4']" img="../../public/src/images/section3_background.png">
    </video-bg> -->
    <div class="contact_style" id="contact_styl">
      <div class="contact-form">
        <div v-if="!auth" class="help">
          <font-awesome-icon icon="question" class="question"/>
          <h1>{{ $t("contact.needHelp") }}</h1>
          <p>{{ $t("contact.doubt") }}</p>
        </div>
        <router-link v-if="!auth" to="/signUp#signUp" class="contact-form-link">{{
          $t("contact.signUp")
        }}</router-link>
        <router-link v-if="!auth" to="/signIn#signIn" class="contact-form-link">{{
          $t("contact.signIn")
        }}</router-link>
        <button v-if="auth" @click="logOut" class="contact-form-link">
          {{ $t("contact.logOut") }}
        </button>
        <div v-if="!auth" class="help list" id="signUp">
          <h1>{{ $t("contact.findOut") }}</h1>
          <p>{{ $t("contact.inside") }}</p>
        </div>
        <div v-if="auth" class="help">
          <p>{{ $t("contact.thanksForSigningUp") }}</p>
          <p>{{ $t("contact.inside") }}</p>
          <p>{{ $t("contact.welcome") }}</p>
        </div>
      </div>
      <div class="contact">
        <h3>{{ $t("contact.touch") }}</h3>
        <p>Serbia</p>
        <p>Novi Sad 2100</p>
        <p class="service">Email</p>
        <p>pleme.ornaments@gmail.com</p>
        <h6 class="service">{{ $t("contact.service") }}</h6>
        <p>{{ $t("contact.days") }}</p>
        <p>{{ $t("contact.hours") }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logout");
    }
  },
  //Auto log in
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>
