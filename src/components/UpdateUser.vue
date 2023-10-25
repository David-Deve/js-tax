<template>
  <h3>Update Information</h3>
  <div class="container mt-4 mb-5">
    <el-form label-position="top">
      <div class="mb-3">
        <el-form-item label="ID Card">
          <el-input v-model="idcard"></el-input>
        </el-form-item>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <el-form-item label="Position">
              <el-select v-model="position" filterable remote>
                <el-option
                  v-for="data in positions"
                  :key="data.id"
                  :label="data.name"
                  :value="data.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <el-form-item label="JoinDate" prop="invoiceDate">
              <el-date-picker
                type="date"
                placeholder="Select date"
                style="width: 200px"
                v-model="joindate"
              ></el-date-picker>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <el-form-item label="Gender">
              <el-select v-model="gender" filterable remote>
                <el-option
                  v-for="data in sex"
                  :key="data.id"
                  :label="data.name"
                  :value="data.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <el-form-item label="Date of Birth" prop="invoiceDate">
              <el-date-picker
                type="date"
                placeholder="Select date"
                style="width: 200px"
                v-model="dateofbirth"
              ></el-date-picker>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <el-form-item label="Address">
          <el-input v-model="address"></el-input>
        </el-form-item>
      </div>
      <div class="mb-3">
        <el-form-item label="Home Number">
          <el-input v-model="homeno"></el-input>
        </el-form-item>
      </div>
      <div class="mb-3">
        <el-form-item label="Street Number">
          <el-input v-model="sttno"></el-input>
        </el-form-item>
      </div>
      <div class="mb-3">
        <el-form-item label="CompanyName">
          <el-input v-model="companyname"></el-input>
        </el-form-item>
      </div>
    </el-form>

    <div class="mt-3">
      <el-button @click="updateUserInformation()" type="primary">
        Update
      </el-button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3>Change Role User</h3>
      <div class="container mt-4 mb-5">
        <el-form label-position="top">
          <div class="mb-3">
            <el-form-item label="Role">
              <el-select v-model="role" filterable remote>
                <el-option
                  v-for="data in roleData"
                  :key="data.id"
                  :label="data.name"
                  :value="data.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
        <el-button @click="updateRole()" type="primary"> Confirm </el-button>
      </div>
    </div>
    <div class="col">
      <h3>Change Password User</h3>
      <div class="container mt-4 mb-5">
        <el-form label-position="top">
          <div class="mb-3">
            <el-form-item label="New Password">
              <el-input v-model="newpass"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <el-button @click="changePassword()" type="primary">
          Confirm
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { updateUser, changeRoleUser, changePasswordUser } from "../api/Service";
import { ElNotification } from "element-plus";
const idcard = ref();
const position = ref();
const joindate = ref();
const gender = ref();
const dateofbirth = ref();
const address = ref();
const homeno = ref();
const sttno = ref();
const companyname = ref();
const role = ref([]);
const newpass = ref();
const roleData = [
  { id: 1, name: "Admin", value: "ROLE_ADMIN" },
  { id: 2, name: "User", value: "ROLE_USER" },
];
const positions = [
  { id: 1, name: "Manager", value: "MANAGER" },
  { id: 2, name: "Accounting", value: "ACCOUNTING" },
  { id: 3, name: "Saler", value: "SALER" },
];
const sex = [
  { id: 1, name: "Male", value: "male" },
  { id: 2, name: "Female", value: "female" },
];
const props = defineProps({
  id: Number,
});
const emits = defineEmits(["cancelUpdate"]);
const handleCancel = () => {
  emits("cancelUpdate");
};
async function updateUserInformation() {
  try {
    const response = await updateUser(
      props.id,
      idcard.value,
      position.value,
      joindate.value,
      gender.value,
      dateofbirth.value,
      address.value,
      homeno.value,
      sttno.value,
      companyname.value
    );
    console.log(response);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Update User Success",
      type: "success",
    });
  } catch (e) {
    ElNotification({
      title: "Erorr",
      duration: 2000,
      message: "Update Fail Please check again",
      type: "erorr",
    });
    console.error(e);
  }
}
async function updateRole() {
  try {
    const response = await changeRoleUser(props.id, role.value);
    console.log(response);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Update User Success",
      type: "success",
    });
  } catch (e) {
    ElNotification({
      title: "Erorr",
      duration: 2000,
      message: "Update Fail Please check again",
      type: "erorr",
    });
    console.error(e);
  }
}
async function changePassword() {
  try {
    const response = await changePasswordUser(props.id, newpass.value);
    console.log(response);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "ChangePassword User Success",
      type: "success",
    });
  } catch (e) {
    ElNotification({
      title: "Erorr",
      duration: 2000,
      message: "Change Password Fail Please check again",
      type: "erorr",
    });
    console.error(e);
  }
}
</script>
<style scoped></style>
