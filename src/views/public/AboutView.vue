<template>
  <div v-loading="loading" element-loading-background="#f3f3f35d">
    <NavBarVue></NavBarVue>
    <SlideShow></SlideShow>
    <div class="container-sm body mb-5">
      <div class="section1">
        <div class="para" style="background-color: rgb(247, 247, 247)">
          <div class="dot"></div>
          <p class="title">{{ $t("about.bio") }}</p>
          <img
            src="@\assets\picture\banner.png"
            alt=""
            class="img-fluid"
            style="border-radius: 10px; margin-top: 10px"
          />
          <p class="mt-1 p-2" style="text-indent: 30px; font-size: 18px">
            {{ $t("about.text1") }}
          </p>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-center">
              <img
                src="@\assets\picture\download1.jpeg"
                alt=""
                style="width: 100%; height: 100%; border: 1px solid black"
              />
            </div>
            <div class="col-md-6 d-flex justify-content-center">
              <img
                src="@\assets\picture\download1.jpeg"
                alt=""
                style="width: 100%; height: 100%; border: 1px solid black"
              />
            </div>
          </div>
          <p class="mt-1 p-2" style="font-size: 18px">
            {{ $t("about.text2") }}
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import NavBarVue from "@/components/NavBar.vue";
import SlideShow from "@/components/SlideShow.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
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

.title {
  margin-left: 10px;
  font-weight: bold;
  /* Add your title styles here */
}
.text {
  font-weight: bold;
}
</style>
