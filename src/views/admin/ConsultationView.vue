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
              <h2>Consultation</h2>
              <el-table
                border
                :data="tableData"
                stripe
                v-loading="loading"
                style="width: 100%"
                height="600"
              >
                <el-table-column type="index"> </el-table-column>
                <el-table-column label="Name">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <i class="bx bx-user"></i>
                      <span style="margin-left: 10px">{{
                        scope.row.name
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Email">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
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
                        scope.row.dateTime
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Description">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.description
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { onMounted, ref } from "vue";
import { getConsultation } from "../../api/Service";
import dayjs from "dayjs";
const tableData = ref([]);
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
async function getAllConsultation() {
  try {
    const response = await getConsultation();
    tableData.value = response.data.map((item) => ({
      ...item,
      dateTime: dayjs(item.dateTime).format("YYYY-MM-DD HH:mm:ss A"),
    }));
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (e) {
    console.warn(e);
  }
}
onMounted(() => {
  getAllConsultation();
});
</script>
