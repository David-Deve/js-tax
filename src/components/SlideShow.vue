<template>
  <div class="container-xxl">
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" :height="carouselHeight">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <img
            class="img img-fluid"
            :src="item.imageSrc"
            alt="Carousel Image"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

const carouselItems = [
  { imageSrc: "/assets/banner.png" },
  { imageSrc: "/assets/banner2.png" },
  { imageSrc: "/assets/banner3.png" },
  { imageSrc: "/assets/banner2.png" },
];

const isSmallScreen = ref(false);

const carouselHeight = computed(() =>
  isSmallScreen.value ? "150px" : "510px"
);

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768; // Adjust the screen size as needed
};

onMounted(() => {
  checkScreenSize(); // Check initial screen size
  window.addEventListener("resize", checkScreenSize); // Listen for window resize events
});

watch(isSmallScreen, () => {
  // When the screen size changes, you may want to re-initialize the carousel
  // or trigger any other necessary actions.
});
</script>

<style scoped>
.img {
  object-fit: fill;
}
</style>
