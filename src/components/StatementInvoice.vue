<template>
  <div
    class="container-xxl"
    v-loading="loading"
    element-loading-background="#f3f3f35d"
  >
    <img
      class="navbar-brand mt-2"
      style="height: 50%; width: 100%"
      src="@\assets\picture\invoiceheader.jpg"
      alt=""
    />
    <div class="">
      <div class="">
        <div class="m-0">
          <!-- <p class="title d-flex flex-column align-items-center title m-0">
            {{ title }}
          </p> -->
          <p class="titleeng d-flex flex-column align-items-center title m-0">
            {{ titleeng }}
          </p>
          <div class="d-flex flex-column align-items-end detial m-0">
            <div class="m-0 content p-1">
              <p class="m-0">វិក្កយបត្រ / Invoice : {{ invno }}</p>
            </div>
          </div>
        </div>
        <p class="m-0">{{ customer }}</p>
        <hr class="line m-1" />
        <p class="m-0">ឈ្មោះក្រុមហ៊ុន / អតិថិជន​: {{ namekh }}</p>
        <p class="m-0">Company Name / Customer: {{ nameeng }}</p>
        <p class="m-0">អាស័យដ្ធាន / Address: {{ add }}</p>
        <p class="m-0">លេខទូរសព្ធ / Phone: {{ phonenumber }}</p>
        <p class="m-0">
          លេខអត្តសញ្ញាណកម្មសារពើពន្ធ (VATTIN):
          <span v-for="(char, index) in vattin" :key="index" class="styled">{{
            char
          }}</span>
        </p>
        <br />
      </div>
      <div class="card-body">
        <div class="table-responsive-sm">
          <table class="table table-bordered">
            <thead class="table-primary">
              <tr>
                <th class="center">
                  <p>No</p>
                </th>
                <th class="text">
                  <p>Description</p>
                </th>
                <th>
                  <p>Amount</p>
                </th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in data" :key="item.id">
              <tr>
                <td class="center" style="text-align: center">
                  {{ index + 1 }}
                </td>
                <td class="center" style="text-align: center">
                  {{ item.name }}
                </td>
                <td class="center" style="text-align: center">
                  {{ item.amount }}.00
                </td>
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
                    <strong>Total</strong>
                  </td>
                  <td class="right">
                    <strong>{{ total }}.00$</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br /><br /><br />
        <br />
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
        <!-- <div class="footer">
          <div class="row">
            <div class="col">
              <small class="text-body-secondary m-2">PostCode: 45464</small>
            </div>
            <div class="col">
              <small class="text-body-secondary"
                >សម្គាល់ : ច្បាប់ដើមសម្រាប់អ្នកទិញ
                ច្បាប់ចម្លងសម្រាប់អ្នកលក់</small
              ><br />
              <small class="text-body-secondary"
                >Note : Original invoice for customer, copied invoice for
                seller.</small
              >
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getTaxInvoiceById } from "../api/Service";
const route = useRoute();
const id = ref(route.params.id);
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
const title = ref("វិក្កយបត្រអាករ");
const titleeng = ref("Statement");
const invno = ref();
const date = ref();
const customer = ref("អតិថិជន / Customer");
const namekh = ref();
const nameeng = ref();
const add = ref();
const phonenumber = ref();
const vattin = ref();
const subtotal = ref();
const vatper = ref();
const vatprice = ref();
const total = ref();
const data = ref([]);
async function getInvoice() {
  try {
    const response = await getTaxInvoiceById(id.value);
    console.log(response);
    add.value = response.data.client.address;
    namekh.value = response.data.client.khmerName;
    nameeng.value = response.data.client.engName;
    invno.value = response.data.noteCode;
    phonenumber.value = response.data.client.phone;
    vattin.value = response.data.client.vattin;
    data.value = response.data.noteDetails;
    subtotal.value = response.data.subTotal;
    vatper.value = response.data.vatPer;
    vatprice.value = response.data.vatPrice;
    total.value = response.data.total;
    date.value = response.data.invoiceDate;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => {
  getInvoice();
  setTimeout(() => {
    window.print();
  }, 1000);
});
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
.footer {
  border: 1px black solid;
}
.styled {
  border: 1px solid #0a6fb8;
  border-radius: 3px;
  margin: 1px;
  padding: 5px;

  /* Add any other styles you want here */
}
</style>
