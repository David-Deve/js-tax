<template>
  <NavBarVue></NavBarVue>
  <SlideShow></SlideShow>
  <div class="container-sm body mb-5">
    <div class="section1" style="background-color: rgb(247, 247, 247)">
      <div class="para">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <div class="col-sm-11 mb-3">
                <div class="dot"></div>
                <p class="title">{{ $t("other.taxpayer") }}</p>
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-start">
                      <p class="number">1</p>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="text">{{ $t("other.general") }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                      <p class="number">2</p>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="text">{{ $t("other.small") }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                      <p class="number">3</p>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="text">{{ $t("other.meduim") }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center">
                      <p class="number">4</p>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="text">{{ $t("other.major") }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="dot"></div>
              <p class="title">{{ $t("other.documents") }}</p>
              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <p class="text2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, quis maiores magnam dolorum id harum.
                  </p>
                  <a href="">{{ $t("service.readmore") }}</a>
                </div>
              </div>

              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <p class="text2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum id odit at ut blanditiis pariatur!
                  </p>
                  <a href="">{{ $t("service.readmore") }}</a>
                </div>
              </div>

              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <p class="text2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi, iusto possimus. Tenetur sint nam in.
                  </p>
                  <a href="">{{ $t("service.readmore") }}</a>
                </div>
              </div>

              <div class="col-sm-11 mb-3">
                <div
                  class="card"
                  style="background-color: rgba(240, 240, 240, 0.5)"
                >
                  <p class="text2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nesciunt sequi deserunt tempore recusandae, excepturi
                    dolorem?
                  </p>
                  <a href="">{{ $t("service.readmore") }}</a>
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
import Footer from "../../components/Footer.vue";
import NavBarVue from "../../components/NavBar.vue";
import SlideShow from "../../components/SlideShow.vue";
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
  margin-left: 5px;
}
.title {
  margin-left: 15px;
  font-weight: bold;
  /* Add your title styles here */
}
.text {
  font-weight: bold;
  margin: auto;
  font-size: 30px;
}
.text2 {
  font-weight: bold;
  margin-left: 5px;
  font-size: 15px;
}
.number {
  font-weight: bold;
  margin: auto;
  color: rgba(51, 35, 239, 1);
  font-size: 50px;
}
</style>
