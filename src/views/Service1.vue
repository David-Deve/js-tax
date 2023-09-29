<template>
  <div class="container-sm body mb-5">
    <div class="section1" style="background-color: white">
      <div class="para">
        <div class="dot"></div>
        <p class="title">Tax Service</p>
        <div class="ms-3">
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
        </div>
        <div class="dot"></div>
        <p class="title">Monthly Tax Service</p>
        <div class="ms-3">
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
        </div>

        <div class="dot"></div>
        <p class="title">Yearly Tax</p>
        <div class="ms-3">
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
          <p>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            recusandae.
          </p>
        </div>
        <p class="ms-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          animi, qui odit tenetur unde incidunt, eaque, iure ut nisi totam
          quisquam natus sequi delectus blanditiis dolorem. Perferendis
          accusamus est perspiciatis corrupti esse aut ratione dignissimos ullam
          ipsam optio! Aperiam accusamus delectus rem provident soluta esse ab
          deserunt libero, laboriosam cupiditate ex porro voluptatem veritatis
          fuga mollitia voluptatibus exercitationem suscipit. Dicta ipsa ipsum
          veniam aspernatur, vero dolorem. Neque, saepe eum, harum suscipit
          sapiente molestiae commodi nesciunt ipsum laboriosam, exercitationem
          tempore porro quo dignissimos corporis quaerat? Blanditiis, rerum vel
          atque quis temporibus eligendi qui vitae. Aliquam ipsa deleniti culpa
          in, voluptas odit.
        </p>
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
