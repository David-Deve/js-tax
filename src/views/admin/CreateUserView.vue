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
                v-model="firstname"
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
                v-model="lastname"
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="lastName"
                required
              />
            </div>
            <div class="row mb-3">
              <div class="col-md-3">
                <label for="role" class="form-label">Gender</label>
                <select
                  v-model="gender"
                  class="form-select"
                  id="role"
                  style="background-color: rgb(236, 236, 236)"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                v-model="phone"
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
                v-model="username"
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
                v-model="email"
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
                  v-model="roles"
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

            <button @click="register()" class="btn btn-primary mt-3 mb-1">
              Register
            </button>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { createUser } from "../../api/Service";
import { ref } from "vue";
import { ElNotification } from "element-plus";
const firstname = ref("");
const lastname = ref("");
const phone = ref("");
const username = ref("");
const gender = ref("");
const email = ref("");
const roles = ref("");

async function register() {
  try {
    // let rolesArray = Array.isArray(roles.value) ? roles.value : [roles.value]; is that code for item value is array
    await createUser(
      firstname.value,
      lastname.value,
      phone.value,
      username.value,
      email.value,
      gender.value,
      roles.value
    );
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Create User Success",
      type: "success",
    });
  } catch (e) {
    console.warn(e);
  }
}
</script>

<style scoped>
.form {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
