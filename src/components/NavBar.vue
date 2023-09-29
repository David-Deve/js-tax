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
            <router-link to="/contact" class="nav-link"
              ><span>Contact</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/other" class="nav-link"
              ><span>Other</span></router-link
            >
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              LogIn
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <p
          class="header"
          style="text-align: center; margin-top: 15px"
          id="exampleModalLabel"
        >
          Login
        </p>
        <div class="modal-body">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            style="background-color: rgba(226, 226, 226, 1)"
            class="form-control"
            aria-describedby="emailHelp"
          />
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            class="form-control"
            style="background-color: rgba(226, 226, 226, 1)"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="button"
          style="width: 94%; margin: auto"
          class="btn btn-primary btn-block"
        >
          Login
        </button>
        <p style="text-align: center; margin-top: 15px">
          Did'nt have Account? Contact to Admin
          <!-- <a href="" data-bs-toggle="modal"
              data-bs-target="#register">here</a> -->
        </p>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="register"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <p
          class="header"
          style="text-align: center; margin-top: 15px"
          id="exampleModalLabel"
        >
          Register
        </p>
        <div class="modal-body">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            style="background-color: rgba(226, 226, 226, 1)"
            class="form-control"
            aria-describedby="emailHelp"
          />

          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            style="background-color: rgba(226, 226, 226, 1)"
            class="form-control"
            aria-describedby="emailHelp"
          />

          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            class="form-control"
            style="background-color: rgba(226, 226, 226, 1)"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="button"
          style="width: 94%; margin: auto"
          class="btn btn-primary btn-block"
        >
          Register
        </button>
        <br />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.nav-item {
  font-weight: bold;
  margin-left: 5px;
}
.active {
  border: 1px solid rgba(51, 35, 239, 1);
  border-radius: 5px;
  background-color: rgba(51, 35, 239, 1);
  color: white !important; /* Set the text color to white */
}
.header {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
/* Add custom styles here */
</style>
