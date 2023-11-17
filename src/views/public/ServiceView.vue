<template>
  <div v-loading="loading" element-loading-background="#f3f3f35d">
    <NavBarVue></NavBarVue>
    <SlideShow></SlideShow>
    <div class="container-sm body mb-5">
      <div class="section1" style="background-color: rgb(247, 247, 247)">
        <div class="para">
          <div class="dot"></div>
          <p class="title">{{ $t("footer.our_service") }}</p>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <router-link to="/service1">
                    <div
                      class="card-body d-flex flex-column align-items-center justify-content-center"
                    >
                      <img src="@\assets\picture\taxservice.png" alt="" />
                      <p class="text mt-2">{{ $t("service.taxservice") }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <router-link to="/service2">
                    <div
                      class="card-body d-flex flex-column align-items-center justify-content-center"
                    >
                      <img src="@\assets\picture\acc.png" alt="" />
                      <p class="text mt-2">{{ $t("service.account") }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-sm-6 mt-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <router-link to="/businessregister">
                    <div
                      class="card-body d-flex flex-column align-items-center justify-content-center"
                    >
                      <img src="@\assets\picture\register.png" alt="" />
                      <p class="text mt-2">{{ $t("service.registeration") }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-sm-6 mt-3 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <router-link to="otherlicenses">
                    <div
                      class="card-body d-flex flex-column align-items-center justify-content-center"
                    >
                      <img src="@\assets\picture\licence.png" class="" alt="" />
                      <p class="text mt-2">{{ $t("service.other") }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import NavBarVue from "@/components/NavBar.vue";
import SlideShow from "@/components/SlideShow.vue";
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
