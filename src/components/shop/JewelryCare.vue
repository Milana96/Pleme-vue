<template>
  <div class="contact_style">
    <div class="services">
      <h1 class="service extended">
        <font-awesome-icon icon="gem" />
        {{ $t("jewelryCare.howToClean") }}
      </h1>
      <p>{{ $t("jewelryCare.cleaning") }}
      </p>
      <h1 class="store service extended">
        <font-awesome-icon icon="gifts" />
        {{ $t("jewelryCare.howToStore") }}
      </h1>
      <p>
      {{ $t("jewelryCare.store") }}
      </p>
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
