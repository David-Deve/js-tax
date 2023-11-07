<template>
  <el-table
    :data="filterTableData"
    border
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
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Tax Date">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.dateNote }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="TaxType">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
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
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import VueCookies from "vue-cookies";
const props = defineProps({
  tableData: Array,
});

const Data = ref(props.tableData);
const router = useRouter();
const loading = ref(true);
const search = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);

const filterTableData = computed(() =>
  Data.value.filter(
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
