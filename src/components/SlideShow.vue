<template>
  <div
    id="carouselExampleControls"
    class="container-xxl carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="src/assets/picture/banner.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="src/assets/picture/banner2.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="src/assets/picture/banner.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <buttonp
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </buttonp>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add custom styles for the hero section and carousel */

.carousel-inner img {
  height: 600px; /* Adjust the height as needed */
}
img {
  border-radius: 15px;
  border: 2px solid black;
}
</style>
