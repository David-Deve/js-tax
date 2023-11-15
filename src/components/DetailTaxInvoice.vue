<template>
  <div>
    <el-table :data="props.data" border style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="50" />
      <el-table-column label="ClientNameKH" width="130">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{
              scope.row.client.khmerName
            }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="client.engName" label="ClientName" width="120" />
      <el-table-column label="CheckList" width="120">
        <template #default="scope">
          <span v-if="scope.row.close == true">Close</span>
          <span v-if="scope.row.close == false">Open</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="invoice.invoiceCode"
        label="InvoiceCode"
        width="120"
      />
      <el-table-column prop="invoice.total" label="Total Inv ($)" width="120" />
      <el-table-column
        prop="invoice.totalKh"
        label="Total Inv (R)"
        width="120"
      />
      <el-table-column prop="name" label="Tax Name" width="120" />
      <el-table-column prop="noteType" label="Tax Type" width="120" />
      <el-table-column prop="total" label="Tax Total" width="120" />
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>
