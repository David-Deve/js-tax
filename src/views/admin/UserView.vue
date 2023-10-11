<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>All User</h2>
              <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                height="700"
                v-loading="loading"
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
  <el-dialog v-model="dialogFormDelete" title="Delete">
    <DeleteUser :id="id" @cancelDelete="dialogFormDelete = false"></DeleteUser>
  </el-dialog>
  <el-dialog v-model="dialogFormUpdate">
    <UpdateUser :id="id" @cancelUpdate="dialogFormUpdate = false"></UpdateUser>
  </el-dialog>
</template>
<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { getAllUser } from "../../api/Service";
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import DeleteUser from "@/components/DeleteUser.vue";
import UpdateUser from "../../components/UpdateUser.vue";
const tableData = ref([]);
const dialogFormDelete = ref(false);
const dialogFormUpdate = ref(false);
const id = ref("");
const loading = ref(true);
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

onMounted(() => {
  getUser();
});
</script>
