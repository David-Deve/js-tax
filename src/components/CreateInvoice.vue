<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="Invoice Name" prop="invoiceName">
      <el-input v-model="form.invoiceName"></el-input>
    </el-form-item>

    <el-form-item label="Invoice Date" prop="invoiceDate">
      <el-date-picker
        type="date"
        placeholder="Select date and time"
        style="width: 200px"
        v-model="form.invoiceDate"
      ></el-date-picker>
    </el-form-item>

    <el-form-item label="VAT Percentage (%)" prop="vatPer">
      <el-input
        v-model="form.vatPer"
        type="number"
        clearable
        style="width: 200px"
        @input="limitInputValue"
      ></el-input>
    </el-form-item>

    <el-form-item label="Rate (Khmer Riel)" prop="rateKh">
      <el-input
        v-model="form.rateKh"
        type="number"
        clearable
        style="width: 200px"
      ></el-input>
    </el-form-item>

    <el-form-item label="Client" prop="client">
      <el-select v-model="form.client" filterable remote>
        <el-option
          v-for="client in clients"
          :key="client.value"
          :label="client.engName"
          :value="client.id"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="Invoice Item" prop="invoiceDetailsPayloads">
      <el-button type="success" @click="addItem">Add Item</el-button>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in form.invoiceDetailsPayloads"
              :key="index"
            >
              <td>
                <el-input
                  v-model="item.invoiceDetailsName"
                  placeholder="Item Name"
                ></el-input>
              </td>
              <td>
                <el-input
                  v-model="item.qty"
                  type="number"
                  placeholder="Quantity"
                ></el-input>
              </td>
              <td>
                <el-input
                  v-model="item.unitPrice"
                  type="number"
                  placeholder="Unit Price"
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
import { createInvoice } from "../api/Service";
import { ElNotification } from "element-plus";
import { getClient } from "../api/Service";

const form = ref({
  invoiceName: "",
  invoiceDate: "",
  vatPer: null,
  rateKh: null,
  client: null,
  invoiceDetailsPayloads: [
    {
      invoiceDetailsName: "",
      qty: "",
      unitPrice: "",
    },
  ],
});

const clients = ref([]);
const addItem = () => {
  form.value.invoiceDetailsPayloads.push({
    invoiceDetailsName: "",
    qty: null,
    unitPrice: null,
  });
};
function limitInputValue() {
  if (form.value.vatPer > 100) {
    form.value.vatPer = 100;
  }
}
async function getAllClient() {
  try {
    const response = await getClient();
    clients.value = response.data;
  } catch (e) {
    console.log(e);
  }
}
async function submitForm() {
  try {
    const res = await createInvoice(
      form.value.invoiceName,
      form.value.invoiceDate,
      form.value.vatPer,
      form.value.rateKh,
      form.value.client,
      form.value.invoiceDetailsPayloads
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
  form.value.invoiceDetailsPayloads.splice(index, 1);
};
onMounted(() => {
  getAllClient();
});
</script>
