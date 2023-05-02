<template>
  <LandingPage></LandingPage>
  <RouterView />
</template>


<script>
  import { RouterView } from 'vue-router'
  import LandingPage from './views/LandingPage.vue';

  export default {
    components: {
      LandingPage
    },
    setup() {}
  }
</script>

<style scoped>
</style>
