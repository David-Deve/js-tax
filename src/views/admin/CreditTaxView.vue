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
              <h2>Credit</h2>
              <TaxPage
                v-if="tableData.length > 0"
                :tableData="tableData"
              ></TaxPage>
              <div class="mt-3">
                <!-- <el-button type="success" @click="dialogVisible = true"
                  >Create</el-button
                > -->
              </div>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>

  <el-dialog v-model="dialogVisible" title="Create New Tax" width="60%">
    <CreateTax></CreateTax>
  </el-dialog>
</template>
<script setup>
import TaxPage from "@/components/TaxPage.vue";
import Sidebar from "@/components/Sidebar.vue";
import { ref, onMounted } from "vue";
import CreateTax from "../../components/CreateTax.vue";
import { getTaxByType } from "../../api/Service";
const loading = ref(true);
const dialogVisible = ref(false);
setTimeout(() => {
  loading.value = false;
}, 300);
const tableData = ref([]);
const url = ref("CREDIT");
async function allTax() {
  try {
    const res = await getTaxByType(url.value);
    tableData.value = res.data;
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  allTax();
});
</script>
