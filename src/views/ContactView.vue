<template>
  <div class="container-sm body mb-5">
    <div class="section1" style="background-color: white">
      <div class="para">
        <div class="dot"></div>
        <p class="title">CONTACT</p>
        <iframe
          class="mb-3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62539.464479267284!2d104.87879505807479!3d11.572167563236412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0xf8f1809319cea6df!2z4Z6W4Z-S4Z6a4Z-H4oCL4Z6U4Z6a4Z6Y4oCL4Z6a4Z624Z6H4oCL4Z6c4Z624Z-G4Z6E4oCL4Z6F4Z6P4Z674Z6Y4Z-S4Z6Y4Z674Z6B4oCL4Z6Y4Z6E4Z-S4Z6C4Z6b!5e0!3m2!1skm!2skh!4v1695892906262!5m2!1skm!2skh"
          style="border-radius: 10px; width: 100%; height: 400px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p class="title">CONTACT</p>
        <p style="margin: 50px">{{ text }}</p>
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
                  <p class="text">Our Office</p>
                  <p>
                    23Eo, Bayab, Phnom Penh Thmei, Sen Sok, Phnom Penh, Cambodia
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
                  <img src="src/assets/picture/acc.png" alt="" />
                  <p class="text">Business Hour</p>
                  <p>Monday-Friday 10:00am - 6:00pm</p>
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
                  <p class="text">Email</p>
                  <p>Js.tx@gmail.com</p>
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
                  <p class="text">Phone Number</p>
                  <p>012 32 44 85</p>
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
