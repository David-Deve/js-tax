<template>
  <NavBarVue></NavBarVue>
  <SlideShow></SlideShow>
  <div class="container-sm body mb-5">
    <div class="section1">
      <div class="para" style="background-color: rgb(247, 247, 247)">
        <div class="dot"></div>
        <p class="title">{{ $t("about.bio") }}</p>
        <img
          src="src/assets/picture/banner.png"
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
              src="src/assets/picture/download1.jpeg"
              alt=""
              style="width: 100%; height: 100%; border: 1px solid black"
            />
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <img
              src="src/assets/picture/download1.jpeg"
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
</template>
<script setup>
import NavBarVue from "../../components/NavBar.vue";
import SlideShow from "../../components/SlideShow.vue";
import Footer from "../../components/Footer.vue";
import { ref } from "vue";

const text =
  ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in architecto
  dolore esse unde, minima repellat autem libero eligendi rem exercitationem
  cupiditate eum explicabo voluptatibus ipsa sequi beatae, ea eius. Esse ipsam
  qui tempora aut quo deserunt laborum possimus? Nisi sed sit iste aperiam
  laborum. Obcaecati vitae eius quas debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dignissimos cum
  maiores quisquam. Tempore iusto debitis quas sunt magni repellat ullam quia
  eius maxime iste dicta nihil placeat dolores, veritatis beatae fuga voluptas
  hic mollitia eaque necessitatibus. Tempora architecto blanditiis doloremque
  doloribus esse, nemo voluptate, possimus, pariatur amet reiciendis suscipit?`);
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
