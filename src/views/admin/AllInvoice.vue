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
              <h2>All Invoice</h2>
              <el-table
                :data="filterTableData"
                stripe
                height="600"
                v-loading="loading"
              >
                <el-table-column label="ID">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="InvoiceName">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.invoiceName
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Invoice Date">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.invoiceDate
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="invoiceNo">
                  <template #default="scope">
                    <el-popover
                      effect="light"
                      trigger="hover"
                      placement="top"
                      width="auto"
                    >
                      <template #default>
                        <div>Invoice: {{ scope.row.invoiceCode }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{
                          scope.row.invoiceCode
                        }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #header>
                    <el-input
                      v-model="search"
                      size="small"
                      placeholder="Type InvoiceNo to search"
                    />
                  </template>
                  <template #default="scope">
                    <!-- <el-button size="small" type="danger">Edit </el-button> -->
                    <el-button
                      @click="printInvoice(scope.row.id)"
                      size="small"
                      type="primary"
                      >Print</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
              <div class="mt-3">
                <el-button type="success" @click="dialogVisible = true"
                  >Create</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>

  <!-- dialog -->
  <el-dialog v-model="dialogVisible" title="Create New Invoice" width="60%">
    <CreateInvoice :emit="invoiceCreated"></CreateInvoice>
  </el-dialog>
</template>
<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import VueCookies from "vue-cookies";
import CreateInvoice from "../../components/CreateInvoice.vue";
import { getAllInvoice } from "../../api/Service";
const router = useRouter();
const search = ref("");
const loading = ref(true);
const dialogVisible = ref(false);
setTimeout(() => {
  loading.value = false;
}, 300);
const tableData = ref([]);

async function allInvoice() {
  try {
    const res = await getAllInvoice();
    tableData.value = res.data;
    console.log(tableData.value);
  } catch (e) {
    console.log(e);
  }
}

function invoiceCreated() {
  allInvoice();
  dialogVisible.value = false;
}
onMounted(() => {
  allInvoice();
});
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.invoiceCode.toLowerCase().includes(search.value.toLowerCase())
  )
);
function printInvoice(id) {
  VueCookies.set("selectedLanguage", "kh", "1d", null, null, true);
  const routeUrl = router.resolve({ name: "invoice", params: { id } }).href;
  window.open(routeUrl, "popup", "width=1000,height=1000  ");
}
</script>
