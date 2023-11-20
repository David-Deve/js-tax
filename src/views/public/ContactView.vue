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
            :src="map"
            style="border-radius: 10px; width: 100%; height: 400px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!-- <p class="title">{{ $t("contact.contact") }}</p> -->
          <p
            style="margin: 30px; text-indent: 30px; font-size: 18px"
            v-html="$t('contact.para')"
          ></p>
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
                    <p>{{ $t("contact.email_address") }}@gmail.com</p>
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
const map = ref(
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15633.436050784894!2d104.87497476085206!3d11.597733295409965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109532fdc6a212d%3A0x81a40b8257883eaa!2sJS%20Accounting%20%26%20Tax%20Services%20Co.%2CLtd!5e0!3m2!1skm!2skh!4v1700490639021!5m2!1skm!2skh"
);
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
