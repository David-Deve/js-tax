<template>
  <NavBarVue></NavBarVue>
  <SlideShow></SlideShow>
  <div class="container-sm body mb-5">
    <div class="section1">
      <div class="para">
        <div class="dot"></div>
        <p class="title">COMPANY INFORMATION</p>
        <img
          src="src/assets/picture/banner.png"
          alt=""
          class="img-fluid"
          style="border-radius: 10px; margin-top: 10px"
        />
        <p style="margin: 50px">{{ text }}</p>
      </div>
    </div>
    <div class="container section2 pt-2" style="background-color: white">
      <div class="row">
        <div class="col-md-6">
          <div class="service-section">
            <div>
              <div class="dot"></div>
              <p class="title">Our Service</p>
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
                    <p class="text">Tax Service</p>
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
                    <p class="text">Other Licence</p>
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
              <p class="title">Event & Notice</p>
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
              <p class="title">Free Consultation</p>
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
    <div class="section2 mt-5" style="background-color: white">
      <p style="font-weight: bold; font-size: 30px; text-align: center">
        Service Agent Certificate Of Complete
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
const text =
  ref(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        minus dicta numquam consequatur architecto iusto quaerat labore, magnam,
        facere error ducimus facilis vero ab suscipit dolorum obcaecati libero
        officia iste nulla? Quaerat incidunt commodi saepe explicabo, quidem
        repudiandae reiciendis enim aliquam ipsam aspernatur recusandae sunt in
        ducimus atque id sed. Provident animi doloremque dolorem iusto
        consequatur nihil numquam magni, aperiam quos, fugiat iure aliquid ut
        soluta error nostrum quae perferendis, corrupti nisi necessitatibus
        quaerat officiis laudantium accusantium reprehenderit. Est repudiandae
        et eos eum nam placeat accusamus sint saepe itaque nihil eligendi eius
        voluptates impedit quos, nobis consequatur fugit autem quod.`);
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
