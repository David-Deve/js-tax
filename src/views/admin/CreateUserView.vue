<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl">
          <h2>Register User</h2>
          <div class="container mt-5 form">
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="firstName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="lastName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                type="tel"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="phone"
                required
              />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="email"
                required
              />
            </div>
            <div class="row">
              <div class="col-md-3">
                <label for="role" class="form-label">Role</label>
                <select
                  class="form-select"
                  id="role"
                  style="background-color: rgb(236, 236, 236)"
                  required
                >
                  <option value="ROLE_USER">User</option>
                  <option value="ROLE_USER">Admin</option>
                  <option value="ROLE_USER">Manager</option>
                </select>
              </div>
            </div>

            <button class="btn btn-primary mt-3 mb-1">Register</button>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
.form {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
