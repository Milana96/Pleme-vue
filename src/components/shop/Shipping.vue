<template>
  <div class="contact_style">
    <div class="services">
      <h1 class="service more">
        <font-awesome-icon icon="truck" />
        {{ $t("shippingReturns.shipping") }}
      </h1>
      <p>
       {{ $t("shippingReturns.shippingText") }}
      </p>
      <ul class="exchanges">
          <h5 class="service more">{{ $t("shippingReturns.shippingOptions") }}:</h5>
          <li>{{ $t("shippingReturns.option1") }}</li> 
          <li>{{ $t("shippingReturns.option2") }}</li> 
          <li>{{ $t("shippingReturns.option3") }}</li> 
      </ul>
      <h6>{{ $t("shippingReturns.delay") }}</h6>
      <p class="important">{{ $t("shippingReturns.delayImportant") }}</p>
      <h1 class="service more">
        <font-awesome-icon icon="exchange-alt" />
        {{ $t("shippingReturns.returns") }}
      </h1>
      <p>
       {{ $t("shippingReturns.returnText") }}
      </p>
      <ul class="exchanges">  
        <h5 class="service more">
          <font-awesome-icon icon="exclamation" />
          {{ $t("shippingReturns.note") }}:
        </h5>
        <li>{{ $t("shippingReturns.note1") }}</li>
        <li>{{ $t("shippingReturns.note2") }}</li>
        <li>{{ $t("shippingReturns.note3") }}</li>
        <li>{{ $t("shippingReturns.note4") }}.</li>
        <li>{{ $t("shippingReturns.note5") }}</li>
        <li>{{ $t("shippingReturns.note6") }}.</li>
      </ul>
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
