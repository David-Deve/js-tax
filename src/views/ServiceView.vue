<template>
  <div class="container-sm body mb-5">
    <div class="section1" style="background-color: white">
      <div class="para">
        <div class="dot"></div>
        <p class="title">OUR SERVICE</p>
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
                  <img src="src/assets/picture/tax service.png" alt="" />
                  <p class="text">Tax Service</p>
                  <a href="/service1">Readmore</a>
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
                  <img src="src/assets/picture/acc.png" alt="" />
                  <p class="text">Account Service</p>
                  <a href="/service2">Readmore</a>
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
                  <img src="src/assets/picture/register.png" alt="" />
                  <p class="text">Registration</p>
                  <a href="/service3">Readmore</a>
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
                  <img src="src/assets/picture/licence.png" alt="" />
                  <p class="text">Other Licence</p>
                  <a href="/service4">Readmore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Footer from "../components/Footer.vue";
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
