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
                :data="tableData"
                stripe
                style="width: 1chrom00%"
                height="700"
                v-loading="loading"
              >
                <el-table-column label="ID">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="CustomerName">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.name
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Create Date">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.date
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
                        <div>Invoice: {{ scope.row.invoiceNo }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{
                          scope.row.invoiceNo
                        }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="Operations">
                  <template #default="scope">
                    <el-button size="small" type="danger">Edit </el-button>
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
</template>
<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import VueCookies from "vue-cookies";
const router = useRouter();
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
const tableData = [
  {
    id: 1,
    name: "customer1",
    date: "23/12/2022",
    invoiceNo: "PPTI20230224",
  },
  {
    id: 2,
    name: "customer2",
    date: "23/12/2022",
    invoiceNo: "PPTI20230225",
  },
  {
    id: 3,
    name: "customer3",
    date: "23/12/2022",
    invoiceNo: "PPTI20230226",
  },
];
function printInvoice(id) {
  VueCookies.set("selectedLanguage", "kh", "1d", null, null, true);
  const routeUrl = router.resolve({ name: "invoice", params: { id } }).href;
  window.open(routeUrl, "popup", "width=1000,height=1000  ");
}
</script>
