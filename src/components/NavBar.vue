<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <img
        class="navbar-brand"
        style="height: 50px; width: "
        src="src/assets/picture/logo.png"
        alt=""
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- Add 'ms-auto' class to the <ul> element -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              ><span>About Us</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/service" class="nav-link"
              ><span>Service</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/document" class="nav-link"
              ><span>Document</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/other" class="nav-link"
              ><span>Other</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/signin" class="nav-link"
              ><span>Sign In</span></router-link
            >
          </li>
          <!-- Add more navigation items as needed -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
.nav-item {
  font-weight: bold;
  margin-left: 5px;
}
.active {
  border: 2px solid rgba(51, 35, 239, 1);
  border-radius: 5px;
  background-color: rgba(51, 35, 239, 1);
  color: white !important; /* Set the text color to white */
}
/* Add custom styles here */
</style>
