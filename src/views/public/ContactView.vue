<template>
  <div v-loading="loading" element-loading-background="#f3f3f35d">
    <NavBarVue></NavBarVue>
    <SlideShow></SlideShow>
    <div class="container-sm body mb-5">
      <div class="section1" style="background-color: rgb(247, 247, 247)">
        <div class="para">
          <div class="dot"></div>
          <p class="title">{{ $t("contact.contact") }}</p>
          <iframe
            class="mb-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62539.464479267284!2d104.87879505807479!3d11.572167563236412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0xf8f1809319cea6df!2z4Z6W4Z-S4Z6a4Z-H4oCL4Z6U4Z6a4Z6Y4oCL4Z6a4Z624Z6H4oCL4Z6c4Z624Z-G4Z6E4oCL4Z6F4Z6P4Z674Z6Y4Z-S4Z6Y4Z674Z6B4oCL4Z6Y4Z6E4Z-S4Z6C4Z6b!5e0!3m2!1skm!2skh!4v1695892906262!5m2!1skm!2skh"
            style="border-radius: 10px; width: 100%; height: 400px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p class="title">{{ $t("contact.contact") }}</p>
          <p style="margin: 30px; text-indent: 30px; font-size: 18px">
            {{ $t("contact.para") }}
          </p>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <i class="bx bx-buildings icon"></i>
                    <p class="text">{{ $t("contact.our_office") }}</p>
                    <p>
                      {{ $t("contact.locatime") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <i class="bx bx-time-five icon"></i>
                    <p class="text">{{ $t("contact.work_hour") }}</p>
                    <p>{{ $t("contact.time") }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mt-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <i class="bx bx-envelope icon"></i>
                    <p class="text">{{ $t("contact.email") }}</p>
                    <p>JS-Tax@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mt-3 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <i class="bx bxs-phone-call icon"></i>
                    <p class="text">{{ $t("contact.phone") }}</p>
                    <p>{{ $t("contact.phonenumber") }}</p>
                  </div>
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
.icon {
  font-size: 50px;
}
</style>
