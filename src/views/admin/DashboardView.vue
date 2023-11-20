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
                  <h5 class="card-title">Reports</h5>
                  <div id="reportsChart"></div>
                </div>
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
import { useAuthentication } from "../../stores/Store";
import { onMounted, ref } from "vue";
import { dataGraph } from "../../api/Service";
import dayjs from "dayjs";
const dashboard = useAuthentication();
const loading = ref(true);
dashboard.getDashboard();
setTimeout(() => {
  loading.value = false;
}, 1000);
const series = ref([
  {
    name: "User",
    data: [],
  },
  {
    name: "Invoice",
    data: [],
  },
  {
    name: "Client",
    data: [],
  },
]);
const fromdate = ref("2022-01-01");
const date = dayjs();
const currentdate = dayjs().add(1, "day").format("YYYY-MM-DD");
const fourmonthago = date.subtract(4, "month").format("YYYY-MM-DD");
const threemonthago = date.subtract(3, "month").format("YYYY-MM-DD");
const twomonthago = date.subtract(2, "month").format("YYYY-MM-DD");
const onemonthago = date.subtract(1, "month").format("YYYY-MM-DD");
async function getdataGraph() {
  try {
    const res1 = await dataGraph(fromdate.value, currentdate);
    const res2 = await dataGraph(fromdate.value, onemonthago);
    const res3 = await dataGraph(fromdate.value, twomonthago);
    const res4 = await dataGraph(fromdate.value, threemonthago);
    const res5 = await dataGraph(fromdate.value, fourmonthago);

    series.value[0].data.push(res1.data[0].data);
    series.value[0].data.push(res2.data[0].data);
    series.value[0].data.push(res3.data[0].data);
    series.value[0].data.push(res4.data[0].data);
    series.value[0].data.push(res5.data[0].data);

    series.value[1].data.push(res1.data[1].data);
    series.value[1].data.push(res2.data[1].data);
    series.value[1].data.push(res3.data[1].data);
    series.value[1].data.push(res4.data[1].data);
    series.value[1].data.push(res5.data[1].data);

    series.value[2].data.push(res1.data[2].data);
    series.value[2].data.push(res2.data[2].data);
    series.value[2].data.push(res3.data[2].data);
    series.value[2].data.push(res4.data[2].data);
    series.value[2].data.push(res5.data[2].data);
  } catch (e) {
    console.log(e);
  }
}

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

onMounted(async function () {
  await getdataGraph();
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
