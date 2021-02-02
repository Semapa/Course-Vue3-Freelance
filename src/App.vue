<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
<!--    <h1 class="text-white">{{this.$route}}</h1>-->
  </div>
</template>

<script>

import TheNavbar from './components/TheNavbar'

export default {
setup() {
  return {

  }
},
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
