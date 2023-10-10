<template>
  <p>Update User ID: {{ id }}</p>
  <div class="container mt-5 mb-3 form">
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
    <div class="row mb-3">
      <div class="col-md-3">
        <label for="role" class="form-label">Gender</label>
        <select
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
    <div class="mt-3">
      <el-button @click="handleCancel">Cancel</el-button>
      <el-button type="primary"> Update </el-button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  id: String,
});
const emits = defineEmits(["cancelUpdate"]);
const handleCancel = () => {
  emits("cancelUpdate");
};
</script>
