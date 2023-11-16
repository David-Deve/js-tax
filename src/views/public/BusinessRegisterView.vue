<template>
  <div v-loading="loading" element-loading-background="#f3f3f35d">
    <NavBarVue></NavBarVue>
    <SlideShow></SlideShow>
    <div class="container-sm body mb-5">
      <div class="section1" style="background-color: white">
        <div class="para">
          <div class="dot"></div>
          <p class="title">
            {{ $t("service.businessregister.businessregister") }}
          </p>
          <div class="ms-3">
            <p
              style="font-size: 18px"
              v-html="$t('service.businessregister.text1')"
            ></p>
          </div>
          <p
            class="ms-1"
            style="font-size: 18px"
            v-html="$t('service.businessregister.para')"
          ></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";

import NavBarVue from "@/components/NavBar.vue";
import SlideShow from "@/components/SlideShow.vue";
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
</script>
<style scoped>
.para {
  margin-top: 30px;
  position: relative;
}

.dot {
  width: 6px;
  height: 29px;
  position: absolute; /* Position the dot relative to its parent .para */
  background: #3323ef;
}
a {
  text-decoration: none;
}
.title {
  margin-left: 10px;
  font-weight: bold;
  /* Add your title styles here */
}
.text {
  font-weight: bold;
}
</style>
