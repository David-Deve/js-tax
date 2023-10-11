<template>
  <div
    class="container-xxl"
    v-loading="loading"
    element-loading-background="#f3f3f35d"
  >
    <img
      class="navbar-brand"
      style="height: 50%; width: 100%"
      src="src/assets/picture/invoiceheader.jpg"
      alt=""
    />
    <div class="">
      <div class="">
        <div class="m-0">
          <p class="title d-flex flex-column align-items-end title m-0">
            {{ title }}
          </p>
          <p class="titleeng d-flex flex-column align-items-end title m-0">
            {{ titleeng }}
          </p>
          <div class="d-flex flex-column align-items-end detial m-0">
            <div class="m-0 border content pt-1 border-black">
              <p class="m-0">វិក្កយបត្រ / Invoice : {{ invno }}</p>
              <p>កាលបរិច្ជេទ / Date : {{ date }}</p>
            </div>
          </div>
        </div>
        <p class="m-0">{{ customer }}</p>
        <hr class="line m-0" />
        <p class="m-0">ឈ្មោះក្រុមហ៊ុន / អតិថិជន​: {{ namekh }}</p>
        <p class="m-0">Company Name / Customer: {{ nameeng }}</p>
        <p class="m-0">អាស័យដ្ធាន: {{ add }}</p>
        <p class="m-0">លេខទូរសព្ធ / Phone:</p>
        <p class="m-0">លេខអត្តសញ្ញាណកម្មសារពើពន្ធ (VATTIN):</p>
      </div>
      <div class="card-body">
        <div class="table-responsive-sm">
          <table class="table table-bordered">
            <thead class="table-primary">
              <tr>
                <th class="center">
                  <p>ល.រ</p>
                  <p>No</p>
                </th>
                <th class="text">
                  <p>បរិយាយមុខទំនិញ​</p>
                  <p>Item Description</p>
                </th>
                <th>
                  <p>បរិមាណ</p>
                  <p>Quatity</p>
                </th>

                <th class="right">
                  <p>តម្លៃឯកតា</p>
                  <p>Unit Price</p>
                </th>
                <th class="right">
                  <p>តម្លៃទំនិញ</p>
                  <p>Amount</p>
                </th>
              </tr>
            </thead>
            <tbody v-for="item in data" :key="item.id">
              <tr>
                <td class="center">{{}}</td>
                <td class="left">{{ item.itemname }}</td>
                <td class="left">{{ item.qty }}</td>
                <td class="right">${{ item.unitprice }}</td>
                <td class="right">${{ item.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row justify-content-end m-0">
          <div class="col-lg-4 col-sm-5">
            <table class="table table-clear">
              <tbody>
                <tr>
                  <td class="left">
                    <strong>Subtotal</strong>
                  </td>
                  <td class="right">$8.497,00</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>Discount (20%)</strong>
                  </td>
                  <td class="right">$1,699,40</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>VAT (10%)</strong>
                  </td>
                  <td class="right">$679,76</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>Total</strong>
                  </td>
                  <td class="right">
                    <strong>$7.477,36</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br /><br /><br />
        <br />
        <div class="row">
          <div class="col-4 ms-5">
            <hr class="line1" />
            <p class="m-0" style="text-align: center">
              ហត្ថលេខា និងឈ្មោះអ្នកទិញ
            </p>
            <p style="text-align: center">Customer's Signature & Name</p>
          </div>
          <div
            class="col d-flex flex-column justify-content-center align-items-center"
          >
            <hr class="line2" />
            <p class="m-0" style="text-align: center">
              ហត្ថលេខា និងឈ្មោះអ្នកលក់
            </p>
            <p style="text-align: center">Seller's Signature & Name</p>
          </div>
        </div>
        <div>
          <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
const title = ref("វិក្កយបត្រអាករ");
const titleeng = ref("Tax Invoice");
const invno = ref("PPTI20230224");
const date = ref("4-Sep-2023");
const customer = ref("អតិថិជន / Customer");
const namekh = ref("វ៉ាយ អេស សុី យ៉ក់សាន់​ ស្តារ (ខេមបូឌា)");
const nameeng = ref("Y.S.C YORKSAN STAR (CAMBODIA) CO.,LTD");
const add = ref(
  "Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
);
const data = [
  {
    itemname: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    qty: "5",
    unitprice: "5000",
    amount: "25000",
  },
  {
    itemname: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    qty: "1",
    unitprice: "500",
    amount: "500",
  },
  {
    itemname: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    qty: "5",
    unitprice: "100",
    amount: "500",
  },
];
setTimeout(() => {
  window.print();
}, 1000);
</script>
<style scoped>
@page {
  size: A4;
  margin: 0;
}
.title {
  color: #545454;
  font-family: "Moul";
}
.line2 {
  width: 80%;
}
th {
  text-align: center;
}
</style>
