<template>
  <div class="container-xxl">
    <NavBarVue></NavBarVue>
    <SlideShow></SlideShow>
    <router-view></router-view>
  </div>
</template>
<script setup>
import NavBarVue from "./components/NavBar.vue";
import SlideShow from "./components/SlideShow.vue";
</script>
<style scoped>
div {
  background-color: rgb(247, 247, 247);
  font-family: "Poppins";
}
</style>
