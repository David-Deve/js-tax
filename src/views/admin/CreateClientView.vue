<template>
  <div class="body">
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl">
          <h2>Register Client</h2>
          <div class="container mt-5 form">
            <div class="mb-3">
              <label for="firstName" class="form-label">Khmer Name</label>
              <input
                v-model="khname"
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="firstName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">English Name</label>
              <input
                v-model="engname"
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="lastName"
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
              <label for="username" class="form-label">Address</label>
              <input
                v-model="address"
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Vattin</label>
              <input
                v-model="vattin"
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Company Name</label>
              <input
                v-model="compname"
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="username"
                required
              />
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
import { createClient } from "../../api/Service";
import { ref } from "vue";
import { ElNotification } from "element-plus";
const khname = ref("");
const engname = ref("");
const email = ref("");
const phone = ref("");
const address = ref("");
const vattin = ref("");
const compname = ref("");

async function register() {
  try {
    await createClient(
      khname.value,
      engname.value,
      email.value,
      phone.value,
      address.value,
      vattin.value,
      compname.value
    );
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Create Client Success",
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
