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
                    <div class="row">
                      <div class="col">
                        <i class="bx bx-user" style="font-size: 35px"></i>
                      </div>
                      <div class="col">
                        <p class="text">User</p>
                      </div>
                    </div>
                    <p class="number">{{ dashboard.allusernumber }}</p>
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
                    <div class="row">
                      <div class="col">
                        <i class="bx bxs-briefcase" style="font-size: 35px"></i>
                      </div>
                      <div class="col">
                        <p class="text">Client</p>
                      </div>
                    </div>
                    <p class="number">{{ dashboard.getAllClient }}</p>
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
                    <div class="row">
                      <div class="col">
                        <i
                          class="bx bxs-coin-stack"
                          style="font-size: 35px"
                        ></i>
                      </div>
                      <div class="col">
                        <p class="text">Tax</p>
                      </div>
                    </div>
                    <p class="number">{{ dashboard.getTax }}</p>
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
                    <div class="row">
                      <div class="col">
                        <i class="bx bx-file" style="font-size: 35px"></i>
                      </div>
                      <div class="col">
                        <p class="text">Invoice</p>
                      </div>
                    </div>
                    <p class="number">{{ dashboard.getInvoice }}</p>
                  </div>
                </div></router-link
              >
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Reports <span>/Today</span></h5>
                  <div id="reportsChart"></div>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-4">
              <div class="card mb-2">
                <router-link to="/credittax" class="btn-link"
                  ><div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">Credit</p>
                    <p class="number-2">{{ dashboard.getcredit }}</p>
                  </div></router-link
                >
              </div>
              <div class="card mb-2">
                <router-link to="/debittax" class="btn-link"
                  ><div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">Debit</p>
                    <p class="number-2">{{ dashboard.getDebit }}</p>
                  </div></router-link
                >
              </div>
              <div class="card mb-2">
                <router-link to="/reimburstax" class="btn-link">
                  <div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">REIMBURSEMENT</p>
                    <p class="number-2">{{ dashboard.getReimbes }}</p>
                  </div></router-link
                >
              </div>
              <div class="card">
                <router-link to="/statementtax" class="btn-link"
                  ><div class="card-body d-flex flex-column align-items-center">
                    <p class="text-2">Statement</p>
                    <p class="number-2">{{ dashboard.getStatement }}</p>
                  </div></router-link
                >
              </div>
            </div> -->
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { useAuthentication } from "../../stores/Store";
import { onMounted, ref } from "vue";
const dashboard = useAuthentication();
const loading = ref(true);
setTimeout(() => {
  dashboard.getDashboard();
  loading.value = false;
}, 1000);

const series = ref([
  {
    name: "User",
    data: [55, 32, 45, 32, 32, 45, 55],
  },
  {
    name: "Client",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: "Invoice",
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
