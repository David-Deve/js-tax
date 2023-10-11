<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <h2>Service</h2>
          <div class="container mt-5 form">
            <div class="mb-3">
              <label for="firstName" class="form-label">Title</label>
              <input
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="firstName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Body</label>
              <textarea
                type="text"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="lastName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Attachment</label>
              <input
                type="file"
                style="background-color: rgb(236, 236, 236)"
                class="form-control"
                id="phone"
                required
              />
            </div>
            <div class="row">
              <div class="col-md-3">
                <label for="role" class="form-label">ServiceType</label>
                <select
                  class="form-select"
                  id="role"
                  style="background-color: rgb(236, 236, 236)"
                  required
                >
                  <option value="">lol</option>
                  <option value="">lol</option>
                  <option value="">lol</option>
                </select>
              </div>
            </div>

            <button class="btn btn-primary mt-3 mb-1">Post</button>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
</script>

<style scoped>
.form {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
