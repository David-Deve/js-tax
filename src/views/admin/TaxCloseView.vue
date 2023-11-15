<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl" element-loading-background="#f3f3f35d">
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>Check List</h2>
              <el-table
                border
                :data="filterTableData"
                stripe
                height="600"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column type="index" label="No"> </el-table-column>
                <el-table-column label="ID">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="TaxName">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.name
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Tax Date">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.dateNote
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="TaxType">
                  <template #default="scope">
                    <el-popover
                      effect="light"
                      trigger="hover"
                      placement="top"
                      width="auto"
                    >
                      <template #default>
                        <div>Invoice: {{ scope.row.noteType }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{ scope.row.noteType }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="Tax Close">
                  <template #default="scope">
                    <span v-if="scope.row.close == true">Close</span>
                    <span v-if="scope.row.close == false">Open</span>
                    <el-switch
                      v-model="scope.row.close"
                      @click="updateClose(scope.row.id, scope.row.close)"
                      class="ms-4"
                      style="
                        --el-switch-on-color: #13ce66;
                        --el-switch-off-color: #ff4949;
                      "
                    />
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
                      @click="printInvoice(scope.row.id)"
                      size="small"
                      type="primary"
                      >Print</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>

  <!-- dialog -->

  <el-dialog v-model="dialogVisible" title="Create New Tax" width="60%">
    <CreateTax :emit="emit"></CreateTax>
  </el-dialog>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import VueCookies from "vue-cookies";
import CreateTax from "../../components/CreateTax.vue";
import { getCloseTax, changeCloseTax } from "../../api/Service";
import { ElNotification } from "element-plus";
const router = useRouter();
const loading = ref(true);
const dialogVisible = ref(false);
const search = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);
const tableData = ref([]);

async function allTax() {
  try {
    const res = await getCloseTax(false);
    if (res.data === null) {
      tableData.value = [];
    } else {
      tableData.value = res.data;
    }
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}
async function updateClose(id, value) {
  console.log(id);
  console.log(value);
  try {
    await changeCloseTax(id, value);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Update Success",
      type: "success",
    });
    allTax();
  } catch (e) {
    console.log(e);
  }
}
function emit() {
  allTax();
  dialogVisible.value = false;
}
onMounted(() => {
  allTax();
});

const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
function printInvoice(id) {
  VueCookies.set("selectedLanguage", "kh", "1d", null, null, true);
  const routeUrl = router.resolve({ name: "taxinvoice", params: { id } }).href;
  window.open(routeUrl, "popup", "width=1000,height=1000  ");
}
</script>
