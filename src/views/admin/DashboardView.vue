<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <div class="row">
            <div class="col-md-3">
              <router-link to="/user" class="btn-link"
                ><div class="card">
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <p class="text">All User</p>
                    <p class="number">{{ allusernumber }}</p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-md-3">
              <router-link to="/client" class="btn-link"
                ><div class="card">
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <p class="text">All Client</p>
                    <p class="number">6</p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-md-3">
              <router-link to="/alltax" class="btn-link"
                ><div class="card">
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <p class="text">All Tax Invoice</p>
                    <p class="number">6</p>
                  </div>
                </div></router-link
              >
            </div>
            <div class="col-md-3">
              <router-link to="/allinvoice" class="btn-link">
                <div class="card">
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                  >
                    <p class="text">All Invoice</p>
                    <p class="number">6</p>
                  </div>
                </div></router-link
              >
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-8">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Reports <span>/Today</span></h5>
                  <div id="reportsChart"></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-2">
                <router-link to="/credittax" class="btn-link"
                  ><div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">Credit</p>
                    <p class="number-2">6</p>
                  </div></router-link
                >
              </div>
              <div class="card mb-2">
                <router-link to="/debittax" class="btn-link"
                  ><div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">Debit</p>
                    <p class="number-2">6</p>
                  </div></router-link
                >
              </div>
              <div class="card mb-2">
                <router-link to="/reimburstax" class="btn-link">
                  <div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">REIMBURSEMENT</p>
                    <p class="number-2">6</p>
                  </div></router-link
                >
              </div>
              <div class="card">
                <router-link to="/statementtax" class="btn-link"
                  ><div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">Statement</p>
                    <p class="number-2">6</p>
                  </div></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { getAllUser } from "../../api/Service";
import { onMounted, ref } from "vue";
const loading = ref(true);
const allusernumber = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);
async function allUser() {
  try {
    const response = await getAllUser();
    allusernumber.value = response.data.length;
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  allUser();
});
const series = ref([
  {
    name: "Sales",
    data: [55, 32, 45, 32, 32, 45, 55],
  },
  {
    name: "Revenue",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: "Customers",
    data: [15, 11, 32, 18, 9, 24, 11],
  },
]);
const chart = ref({
  height: 350,
  type: "area",
  toolbar: {
    show: false,
  },
});
const markers = ref({
  size: 4,
});
const color = ref(["#4154f1", "#2eca6a", "#ff771d"]);
const fill = ref({
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.3,
    opacityTo: 0.4,
    stops: [0, 90, 100],
  },
});
const dataLabels = {
  enabled: false,
};
const stroke = ref({
  curve: "smooth",
  width: 2,
});
const tooltip = ref({
  x: {
    format: "dd/MM/yy HH:mm",
  },
});

onMounted(async () => {
  new ApexCharts(document.querySelector("#reportsChart"), {
    series: series.value,
    chart: chart.value,
    markers: markers.value,
    stroke: stroke.value,
    color: color.value,
    fill: fill.value,
    dataLabels: dataLabels,
    tooltip: tooltip.value,
  }).render();
});
</script>

<style scoped>
.text {
  font-size: 25px;
}
.number {
  font-weight: bold;
  font-size: 50px;
}
.btn-link {
  text-decoration: none;
  color: black;
}
.btn-link :hover {
  color: rgb(75, 75, 75);
}
</style>
