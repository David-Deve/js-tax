<template>
  <div class="container-xxl">
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" height="510px">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <img class="img" :src="item.imageSrc" alt="Carousel Image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
const carouselItems = [
  { imageSrc: "/assets/picture/banner.png" },
  { imageSrc: "/assets/picture/banner2.png" },
  { imageSrc: "/assets/picture/download.jpeg" },
  { imageSrc: "/assets/picture/banner2.png" },
];
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
