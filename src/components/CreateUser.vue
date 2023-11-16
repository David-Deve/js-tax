<template>
  <div
    class="container-xxl"
    v-loading="loading"
    element-loading-background="#f3f3f35d"
  >
    <h2>Register User</h2>
    <div class="container mt-5">
      <el-form label-position="top">
        <div class="mb-3">
          <el-form-item label="FirstName">
            <el-input v-model="firstname"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Last Name">
            <el-input v-model="lastname"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Gender">
            <el-select v-model="gender" filterable remote>
              <el-option
                v-for="data in typegender"
                :key="data.id"
                :label="data.value"
                :value="data.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Phone Number">
            <el-input v-model="phone" type="number"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Username">
            <el-input v-model="username" type="text"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Email">
            <el-input v-model="email" type="email"></el-input>
          </el-form-item>
        </div>
        <div class="row">
          <div class="col-md-3">
            <el-form-item label="ROLE">
              <el-select v-model="roles" filterable remote>
                <el-option
                  v-for="data in role"
                  :key="data.id"
                  :label="data.name"
                  :value="data.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form>

      <button @click="register()" class="btn btn-primary mt-3 mb-1">
        Register
      </button>
    </div>
  </div>
</template>
<script setup>
import { createUser } from "../api/Service";
import { ref } from "vue";
import { ElNotification } from "element-plus";
const { emit } = defineProps(["emit"]);
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
const firstname = ref("");
const lastname = ref("");
const phone = ref("");
const username = ref("");
const gender = ref("");
const email = ref("");
const roles = ref("");
const typegender = [
  { id: 1, value: "male" },
  { id: 2, value: "female" },
];
const role = [
  { id: 1, name: "Admin", value: "ROLE_ADMIN" },
  { id: 2, name: "User", value: "ROLE_USER" },
];
async function register() {
  try {
    // let rolesArray = Array.isArray(roles.value) ? roles.value : [roles.value]; is that code for item value is array
    const res = await createUser(
      firstname.value,
      lastname.value,
      phone.value,
      username.value,
      email.value,
      gender.value,
      roles.value
    );
    console.log(res);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Create User Success",
      type: "success",
    });
    emit("userCreated");
  } catch (e) {
    ElNotification({
      title: "Fail",
      duration: 2000,
      message: "User does have Right Role",
      type: "error",
    });
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
