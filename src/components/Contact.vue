<template>
  <div>
    <contact-dashboard></contact-dashboard>
    <router-view></router-view>
  </div>
</template>

<script>
import ContactDashboardVue from './ContactDashboard.vue';
export default {
  data() {
    return {};
  },
  components: {
    'contactDashboard': ContactDashboardVue
  }
};
</script>

<style lang="scss"></style>
