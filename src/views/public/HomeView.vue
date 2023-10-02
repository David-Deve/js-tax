<template>
  <NavBarVue></NavBarVue>
  <SlideShow></SlideShow>
  <div class="container-sm body mb-5">
    <div class="section1">
      <div class="para" style="background-color: rgb(247, 247, 247)">
        <div class="dot"></div>
        <p class="title">{{ $t("home.com_info") }}</p>
        <img
          src="src/assets/picture/banner.png"
          alt=""
          class="img-fluid"
          style="border-radius: 10px; margin-top: 10px"
        />
        <p class="mt-1 p-2" style="text-indent: 30px; font-size: 18px">
          {{ $t("home.para") }}
        </p>
      </div>
    </div>
    <div
      class="container section2 pt-2"
      style="background-color: rgb(247, 247, 247)"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="service-section">
            <div>
              <div class="dot"></div>
              <p class="title">{{ $t("home.our_service") }}</p>
            </div>
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
                    <p class="text">{{ $t("service.taxservice") }}</p>
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
                    <p class="text">{{ $t("service.account") }}</p>
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
                    <p class="text">{{ $t("service.registeration") }}</p>
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
                    <img src="src/assets/picture/licence.png" alt="" />
                    <p class="text">{{ $t("service.other") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="event-section">
            <div>
              <div class="dot"></div>
              <p class="title">{{ $t("home.event") }}</p>
            </div>
            <div
              class="card"
              style="background-color: rgba(240, 240, 240, 0.5)"
            >
              <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                  <img
                    src="src/assets/picture/logo1.png"
                    class="card-img-top mx-auto"
                    alt="..."
                    style="width: 80%"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card mt-3"
              style="background-color: rgba(240, 240, 240, 0.5)"
            >
              <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                  <img
                    src="src/assets/picture/logo1.png"
                    class="card-img-top mx-auto"
                    alt="..."
                    style="width: 80%"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" class="btn btn-secondary mt-2">
              See more
            </button>
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div class="consultation-section pb-5">
            <div>
              <div class="dot"></div>
              <p class="title">{{ $t("home.consultation") }}</p>
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Email Address"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="Write Here..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section2 mt-5" style="background-color: rgb(247, 247, 247)">
      <p style="font-weight: bold; font-size: 30px; text-align: center">
        {{ $t("home.service_complete") }}
      </p>
      <div class="row">
        <div class="col-md-4 d-flex justify-content-evenly">
          <img
            src="src/assets/picture/form.jpg"
            alt=""
            style="max-width: 60%; max-height: 60%"
          />
        </div>
        <div class="col-md-4 d-flex justify-content-evenly">
          <img
            src="src/assets/picture/form.jpg"
            alt=""
            style="max-width: 60%; max-height: 60%"
          />
        </div>
        <div class="col-md-4 d-flex justify-content-evenly">
          <img
            src="src/assets/picture/form.jpg"
            alt=""
            style="max-width: 60%; max-height: 60%"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import Footer from "../../components/Footer.vue";
import NavBarVue from "../../components/NavBar.vue";
import SlideShow from "../../components/SlideShow.vue";
</script>

<style scoped>
.para {
  margin-top: 30px;
  background-color: white;
  position: relative;
}

.dot {
  width: 6px;
  height: 29px;
  position: absolute;
  background: #3323ef;
}

.title {
  margin-left: 10px;
  font-weight: bold;
}
.text {
  font-weight: bold;
}
</style>
