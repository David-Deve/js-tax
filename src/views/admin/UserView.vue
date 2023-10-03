<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl">
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>All User</h2>
              <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                height="700"
              >
                <el-table-column type="index"> </el-table-column>
                <el-table-column label="Name">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <i class="bx bx-user"></i>
                      <span style="margin-left: 10px">{{
                        scope.row.username
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Gender">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <div v-if="scope.row.gender == 'male'">
                        <i class="bx bx-male"></i>
                      </div>
                      <div v-if="scope.row.gender == 'female'">
                        <i class="bx bx-female"></i>
                      </div>
                      <span style="margin-left: 10px">{{
                        scope.row.gender
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Create Date">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.createDate
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="PhoneNumber">
                  <template #default="scope">
                    <el-popover
                      effect="light"
                      trigger="hover"
                      placement="top"
                      width="auto"
                    >
                      <template #default>
                        <div>name: {{ scope.row.username }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{ scope.row.phone }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="Operations">
                  <template #default="scope">
                    <el-button
                      size="small"
                      @click="handleGetIdUpdate(scope.row.id)"
                      >Edit</el-button
                    >
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleGetIdDelete(scope.row.id)"
                      >Delete
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
  <!-- Dialog for delete  -->
  <el-dialog v-model="dialogFormDelete" title="Delete">
    <p>Are you Sure ? You want delete User ID: {{ id }}</p>
    <span class="dialog-footer">
      <el-button @click="dialogFormDelete = false">Cancel</el-button>
      <el-button type="primary" @click="handleDelete()"> Confirm </el-button>
    </span>
  </el-dialog>

  <!-- Dialog for Update -->
  <el-dialog v-model="dialogFormUpdate" title="Update">
    <p>Are you Sure ? You want delete User ID: {{ id }}</p>
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
        <el-button @click="dialogFormDelete = false">Cancel</el-button>
        <el-button type="primary" @click="handleUpdate()"> Update </el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { getAllUser } from "../../api/Service";
import { ref, onMounted } from "vue";
import dayjs from "dayjs";

const tableData = ref([]);
const dialogFormDelete = ref(false);
const dialogFormUpdate = ref(false);
const id = ref("");
async function getUser() {
  try {
    const response = await getAllUser();
    tableData.value = response.data.map((item) => ({
      ...item,
      createDate: dayjs(item.createDate).format("YYYY/MM/DD"),
    }));
  } catch (e) {
    console.log(e);
  }
}
function handleGetIdDelete(row) {
  dialogFormDelete.value = true;
  console.log(row);
  id.value = row;
}
function handleDelete() {
  console.log(id.value);
}

function handleGetIdUpdate(row) {
  dialogFormUpdate.value = true;
  console.log(row);
  id.value = row;
}
function handleUpdate() {
  console.log(id.value);
}

onMounted(() => {
  getUser();
});
</script>
