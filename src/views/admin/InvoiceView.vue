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
          <p class="title d-flex flex-column align-items-end title m-0">
            {{ title }}
          </p>
          <p class="titleeng d-flex flex-column align-items-end title m-0">
            {{ titleeng }}
          </p>
          <div class="d-flex flex-column align-items-end detial m-0">
            <div class="m-0 border content p-1 border-black">
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
            <tbody v-for="(item, index) in data" :key="item.id">
              <tr>
                <td class="center">{{ index + 1 }}</td>
                <td class="left">{{ item.invoiceDetailName }}</td>
                <td class="left">{{ item.qty }}</td>
                <td class="right">${{ item.unitPrice }}</td>
                <td class="right">${{ item.lineItemPrice }}</td>
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
                  <td class="right">{{ subtotal }}$</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>VAT ({{ vatper }}%)</strong>
                  </td>
                  <td class="right">{{ vatprice }}$</td>
                </tr>
                <tr>
                  <td class="left">
                    <strong>Total</strong>
                  </td>
                  <td class="right">
                    <strong>{{ total }}$</strong>
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
        <div class="footer">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getInvoiceById } from "../../api/Service";
const route = useRoute();
const id = ref(route.params.id);
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 300);
const title = ref("វិក្កយបត្រអាករ");
const titleeng = ref("Tax Invoice");
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
    const response = await getInvoiceById(id.value);
    console.log(response);
    add.value = response.data.client.address;
    namekh.value = response.data.client.khmerName;
    nameeng.value = response.data.client.engName;
    invno.value = response.data.invoiceCode;
    phonenumber.value = response.data.client.phone;
    vattin.value = response.data.client.vattin;
    data.value = response.data.invoiceDetails;
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
  border: 1px solid aqua;
  border-radius: 3px;
  margin: 1px;
  padding: 5px;

  /* Add any other styles you want here */
}
</style>
