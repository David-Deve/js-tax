<template>
  <div class="container">
    <br /><br /><br />
    <br /><br /><br />
    <h3 style="text-align: center; font-weight: bold">{{ headerText }}</h3>
    <br /><br />
    <div class="row justify-content-between">
      <div class="col-auto">
        <p class="text">To: {{ client }}</p>
      </div>
      <div class="col-auto">
        <p class="text">Date: {{ date }}</p>
      </div>
    </div>
    <br /><br /><br />
    <div class="table-responsive-sm p-1">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th style="text-align: center">
              <p>No</p>
            </th>
            <th style="text-align: center">
              <p>Description</p>
            </th>
            <th style="text-align: center">
              <p>Amount</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td class="center">{{ index + 1 }}</td>
            <td class="left">{{ item.name }}</td>
            <td class="right">${{ item.amount }}</td>
          </tr>

          <tr>
            <td
              colspan="2"
              class="table"
              style="text-align: center; font-weight: bold"
            >
              TOTAL
            </td>
            <td>${{ total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getTaxInvoiceById } from "../api/Service";
import { useRoute } from "vue-router";
const headerText = ref("");
const route = useRoute();
const client = ref("");
const date = ref("");
const id = ref(route.params.id);
const data = ref();
const total = ref();
async function getTaxInvoice() {
  try {
    const response = await getTaxInvoiceById(id.value);
    console.log(response.data);
    data.value = response.data.noteDetails;
    date.value = response.data.dateNote;
    total.value = response.data.total;
    client.value = response.data.client.engName;
    if (response.data.noteType == "DEBIT") {
      headerText.value = "DEBIT";
    } else if (response.data.noteType == "CREDIT") {
      headerText.value = "CREDIT";
    } else if (response.data.noteType == "RE_IN") {
      headerText.value = "REIMBURSEMENT";
    } else if (response.data.noteType == "STATEMENT") {
      headerText.value = "STATEMENT";
    }
  } catch (e) {
    console.error(e);
  }
}
onMounted(() => {
  getTaxInvoice();
  setTimeout(() => {
    window.print();
  }, 1000);
});
</script>
<style scoped>
.text {
  font-size: 25px;
}
</style>
