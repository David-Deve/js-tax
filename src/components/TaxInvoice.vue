<template>
  <div class="container">
    <br /><br /><br />
    <br /><br /><br />
    <h3 style="text-align: center; font-weight: bold">{{ headerText }}</h3>
    <br />
    <div class="row justify-content-between">
      <p class="text" style="font-size: 20px">No: {{ noteno }}</p>
      <div class="col-auto">
        <p class="text" style="font-size: 20px">To: {{ client }}</p>
      </div>
      <div class="col-auto">
        <p class="text" style="font-size: 20px">Date: {{ date }}</p>
      </div>
    </div>
    <br /><br />
    <div class="table-responsive-sm p-1">
      <table class="table table-bordered bold-table">
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
            <td class="right">
              ${{ item.amount }}
              <p></p>
            </td>
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
      <p class="text" style="font-size: 15px">Deposit Payment:</p>
      <p class="text" style="font-size: 15px">ABA BANK CAMBODIA</p>
      <p class="text" style="font-size: 15px">ACCOUNT NAME: JS-TAX CAMBODIA</p>
      <p class="text" style="font-size: 15px">ACCOUNT Number: 000 001 002</p>

      <p class="text" style="text-align: end">{{ createby }}</p>
    </div>
  </div>
  <!-- <p>
    <span v-for="(char, index) in number" :key="index" class="styled">{{
      char
    }}</span>
  </p> -->
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
const noteno = ref();
const createby = ref();
const number = ref("L0019901900783");
async function getTaxInvoice() {
  try {
    const response = await getTaxInvoiceById(id.value);
    console.log(response.data);
    data.value = response.data.noteDetails;
    date.value = response.data.dateNote;
    total.value = response.data.total;
    noteno.value = response.data.noteCode;
    // client.value = response.data.client.engName;
    createby.value = response.data.createBy;
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
  font-family: monospace;
}
.bold-table {
  border-width: 2px; /* Adjust the width as needed */
  border-style: solid;
  border-color: black; /* Adjust the color as needed */
}
.styled {
  border: 1px solid aqua;
  border-radius: 3px;
  margin: 1px;
  padding: 5px;

  /* Add any other styles you want here */
}
</style>
