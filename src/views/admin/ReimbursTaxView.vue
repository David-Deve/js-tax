<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl" element-loading-background="#f3f3f35d">
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>REIMBURSEMENT</h2>
              <el-table
                border
                :data="filterTableData"
                stripe
                height="600"
                style="width: 100%"
                v-loading="loading"
              >
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

  <el-dialog v-model="dialogVisible" title="Create New Tax" width="60%">
    <CreateTax></CreateTax>
  </el-dialog>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { ref, onMounted, computed } from "vue";
import CreateTax from "@/components/CreateTax.vue";
import { getTaxByType } from "@/api/Service";
const loading = ref(true);
const dialogVisible = ref(false);
setTimeout(() => {
  loading.value = false;
}, 300);
const tableData = ref([]);
const search = ref("");
const url = ref("RE_IN");

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
</script>
