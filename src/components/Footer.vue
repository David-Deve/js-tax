<template>
  <div class="container-fliud">
    <div class="row" style="background-color: rgb(238, 238, 238)">
      <div class="col-md-4 d-flex justify-content-center">
        <div>
          <p class="title mt-5">{{ $t("footer.our_service") }}</p>
          <p>. {{ $t("footer.taxservice") }}</p>
          <p>. {{ $t("footer.account") }}</p>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <div>
          <p class="title mt-5">{{ $t("footer.quickline") }}</p>
          <router-link class="link" to="/">Home</router-link><br />
          <router-link class="link" to="/about">About</router-link><br />
          <router-link class="link" to="/contact">Contact</router-link><br />
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <div>
          <p class="title mt-5">{{ $t("footer.contact") }}</p>
          <div class="d-flex align-items-center">
            <i class="bx bx-current-location" style="font-size: 25px"></i>
            <p class="ms-2">
              {{ $t("contact.locatime") }}
            </p>
          </div>
          <div class="d-flex align-items-center">
            <i class="bx bx-phone" style="font-size: 25px"></i>
            <p class="ms-2 pt-3">012 32 44 85</p>
          </div>
          <div class="d-flex align-items-center">
            <i class="bx bxl-chrome" style="font-size: 25px"></i>
            <p class="ms-2 pt-3">WWW.JS-Tax.com.kh</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="background-color: rgb(238, 238, 238)">
      <div class="col-md-6 d-flex justify-content-start">
        <div>
          <p class="ms-3">
            © 2023 JS Accounting & Tax Service. All rights reserved.
          </p>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <div class="justify-content-end me-5" style="font-size: 25px">
          <i class="bx bxl-facebook-circle"></i>
          <i class="bx bxl-telegram"></i>
          <i class="bx bxs-envelope"></i>
          <i class="bx bxl-whatsapp"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.link {
  text-decoration: none;
}
.title {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
</style>
