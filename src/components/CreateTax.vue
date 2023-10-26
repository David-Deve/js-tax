<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="Tax Name" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <div class="row">
      <div class="col">
        <el-form-item label="Tax Date" prop="dateNote">
          <el-date-picker
            type="date"
            class="w-100"
            placeholder="Select date and time"
            style="width: 200px"
            v-model="form.dateNote"
          ></el-date-picker>
        </el-form-item>
      </div>
      <div class="col">
        <el-form-item label="NoteType" prop="noteType">
          <el-select class="w-100" v-model="form.noteType" filterable remote>
            <el-option
              v-for="item in type"
              :key="item.id"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="col">
        <el-form-item label="Rate (Khmer Riel)" prop="rateKh">
          <el-input
            v-model="form.rateToRiel"
            class="w-100"
            type="number"
            clearable
            style="width: 200px"
          ></el-input>
        </el-form-item>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-form-item label="Total" prop="total">
          <el-input
            class="w-100"
            v-model="form.total"
            type="number"
            clearable
            style="width: 200px"
          ></el-input>
        </el-form-item>
      </div>
      <div class="col">
        <el-form-item label="Invoice" prop="invoiceId">
          <el-select v-model="form.invoiceId" class="w-100" filterable remote>
            <el-option
              v-for="inv in invoice"
              :key="inv.value"
              :label="inv.invoiceCode"
              :value="inv.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="col">
        <el-form-item label="Client" prop="clientId">
          <el-select v-model="form.clientId" class="w-100" filterable remote>
            <el-option
              v-for="client in clients"
              :key="client.value"
              :label="client.engName"
              :value="client.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </div>

    <el-form-item label="Invoice Item" prop="invoiceDetailsPayloads">
      <el-button type="success" @click="addItem">Add Item</el-button>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Currency Type</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in form.detailsPayloads" :key="index">
              <td class="me-4">
                <el-input
                  v-model="item.name"
                  placeholder="Item Name"
                ></el-input>
              </td>
              <td>
                <el-select v-model="item.currencyType" filterable remote>
                  <el-option
                    v-for="currency in currencyValue"
                    :key="currency.id"
                    :label="currency.value"
                    :value="currency.value"
                  ></el-option>
                </el-select>
              </td>
              <td>
                <el-input
                  v-model="item.amount"
                  type="number"
                  placeholder="Amount"
                ></el-input>
              </td>
              <td>
                <el-button type="danger" @click="removeItem(index)"
                  >Remove Item</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createTax } from "../api/Service";
import { ElNotification } from "element-plus";
import { getClient, getAllInvoice } from "../api/Service";

const form = ref({
  name: "",
  dateNote: "",
  noteType: "",
  rateToRiel: "4100",
  total: "",
  invoiceId: "",
  clientId: "",
  detailsPayloads: [
    {
      name: "",
      currencyType: "",
      amount: "",
    },
  ],
});
const type = ref([
  { id: 1, value: "DEBIT" },
  { id: 2, value: "CREDIT" },
  { id: 3, value: "RE_IN" },
  { id: 4, value: "STATEMENT" },
]);
const currencyValue = ref([
  { id: 1, value: "USD" },
  { id: 2, value: "KHR" },
]);
const clients = ref([]);
const invoice = ref([]);
const addItem = () => {
  form.value.detailsPayloads.push({
    name: "",
    currencyType: null,
    amount: null,
  });
};
function limitInputValue() {
  if (form.value.vatPer > 100) {
    form.value.vatPer = 100;
  }
}
async function getAllClientInvoice() {
  try {
    const responseclient = await getClient();
    const responseinv = await getAllInvoice();
    clients.value = responseclient.data;
    invoice.value = responseinv.data;
  } catch (e) {
    console.log(e);
  }
}
async function submitForm() {
  try {
    const res = await createTax(
      form.value.name,
      form.value.dateNote,
      form.value.noteType,
      form.value.rateToRiel,
      form.value.total,
      form.value.invoiceId,
      form.value.clientId,
      form.value.detailsPayloads
    );
    if (res) {
      ElNotification({
        title: "Success",
        duration: 2000,
        message: "Create Success",
        type: "success",
      });
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  } catch (e) {
    ElNotification({
      title: "Erorr",
      duration: 2000,
      message: "Create Fail Please check again",
      type: "erorr",
    });
    console.log(e);
  }
}
const removeItem = (index) => {
  form.value.detailsPayloads.splice(index, 1);
};
onMounted(() => {
  getAllClientInvoice();
});
</script>
