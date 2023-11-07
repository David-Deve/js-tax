<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl" element-loading-background="#f3f3f35d">
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>All User</h2>
              <el-table
                :data="filterTableData"
                border
                stripe
                style="width: 100%"
                height="600"
                v-loading="loading"
              >
                <el-table-column type="index"> </el-table-column>
                <el-table-column label="Username">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <i class="bx bx-user"></i>
                      <span style="margin-left: 10px">{{
                        scope.row.username
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Email">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <!-- <div v-if="scope.row.gender == 'male'">
                        <i class="bx bx-male"></i>
                      </div>
                      <div v-if="scope.row.gender == 'female'">
                        <i class="bx bx-female"></i>
                      </div> -->
                      <span style="margin-left: 10px">{{
                        scope.row.email
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
                        <div>name: {{ scope.row.firstname }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{ scope.row.phone }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #header>
                    <el-input
                      v-model="search"
                      size="small"
                      placeholder="Type Name to search"
                    />
                  </template>
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
              <el-button type="success" @click="handleCreateUser()" class="mt-2"
                >Create</el-button
              >
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
  <el-dialog v-model="dialogFormDelete" title="Delete">
    <DeleteUser
      :id="id"
      @cancelDelete="dialogFormDelete = false"
      :emit="emit"
    ></DeleteUser>
  </el-dialog>
  <el-dialog v-model="dialogFormUpdate">
    <UpdateUser :id="id" @cancelUpdate="dialogFormUpdate = false"></UpdateUser>
  </el-dialog>
  <el-dialog v-model="dialogFromCreate">
    <CreateUser :emit="emit"></CreateUser>
  </el-dialog>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import CreateUser from "@/components/CreateUser.vue";
import { getAllUser } from "../../api/Service";
import { ref, onMounted, computed } from "vue";
import dayjs from "dayjs";
import DeleteUser from "@/components/DeleteUser.vue";
import UpdateUser from "../../components/UpdateUser.vue";
const tableData = ref([]);
const dialogFormDelete = ref(false);
const dialogFormUpdate = ref(false);
const dialogFromCreate = ref(false);
const id = ref("");
const loading = ref(true);
const search = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);
async function getUser() {
  try {
    const response = await getAllUser();
    tableData.value = response.data.map((item) => ({
      ...item,
      createDate: dayjs(item.createDate).format("YYYY-MM-DD HH:mm:ss A"),
    }));
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (e) {
    console.log(e);
  }
}
function emit() {
  getUser();
  dialogFromCreate.value = false;
  dialogFormDelete.value = false;
}
function handleGetIdDelete(row) {
  dialogFormDelete.value = true;
  console.log(row);
  id.value = row;
}
function handleGetIdUpdate(row) {
  dialogFormUpdate.value = true;
  console.log(row);
  id.value = row;
}
function handleCreateUser() {
  dialogFromCreate.value = true;
}

onMounted(() => {
  getUser();
});
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.username.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>
