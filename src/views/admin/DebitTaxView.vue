<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl" element-loading-background="#f3f3f35d">
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>DEBIT</h2>
              <el-table
                border
                :data="filterTableData"
                stripe
                height="600"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column type="index" label="No" />
                <el-table-column label="Client Name">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.client.companyName
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
                <el-table-column label="Status">
                  <template #default="scope">
                    <el-popover
                      effect="light"
                      trigger="hover"
                      placement="top"
                      width="auto"
                    >
                      <template #default>
                        <div>{{ scope.row.close }}</div>
                      </template>
                      <template #reference>
                        <el-tag v-if="scope.row.close == true" type="success"
                          >Close</el-tag
                        >
                        <el-tag v-if="scope.row.close == false" type="danger"
                          >Open</el-tag
                        >
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="Total Price">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px"
                        >{{ scope.row.total }}$</span
                      >
                    </div>
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
                    <!-- <el-button size="small" type="danger">Edit </el-button> -->
                    <el-button
                      @click="printInvoice(scope.row.id)"
                      size="small"
                      type="primary"
                      >Print</el-button
                    >
                    <el-button @click="goDetail(scope.row.id)" size="small"
                      >Detail</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
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

  <el-dialog
    v-model="dialogDetail"
    title="Detail Invoice"
    width="60%"
    style="height: 300px"
  >
    <DetailTaxInvoice :data="tableDataDetail"></DetailTaxInvoice>
  </el-dialog>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { ref, onMounted, computed } from "vue";
import DetailTaxInvoice from "@/components/DetailTaxInvoice.vue";
import { getTaxByType, getTaxInvoiceById } from "../../api/Service";
import { useRouter } from "vue-router";
import VueCookies from "vue-cookies";
const dialogDetail = ref(false);
const loading = ref(true);
const search = ref("");
const tableDataDetail = ref([]);
const router = useRouter();
setTimeout(() => {
  loading.value = false;
}, 300);
const tableData = ref([]);
const url = ref("DEBIT");
async function allTax() {
  try {
    const res = await getTaxByType(url.value);
    if (res.data === null) {
      tableData.value = [];
    } else {
      tableData.value = res.data;
    }
  } catch (e) {
    console.log(e);
  }
}
async function goDetail(id) {
  dialogDetail.value = true;
  try {
    const res = await getTaxInvoiceById(id);
    tableDataDetail.value[0] = res.data;
    console.log(tableDataDetail.value);
  } catch (e) {
    console.log(e);
  }
}
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
onMounted(() => {
  allTax();
});
function printInvoice(id) {
  VueCookies.set("selectedLanguage", "kh", "1d", null, null, true);
  const routeUrl = router.resolve({ name: "taxinvoice", params: { id } }).href;
  window.open(routeUrl, "popup", "width=1000,height=1000  ");
}
</script>
