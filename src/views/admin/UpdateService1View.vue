<template>
  <div>
    100px
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <h2>Service1(TAX Service)</h2>
          <div class="container mt-5 mb-3 form">
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 1</label>
              <textarea
                v-model="khpara1"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 2</label>
              <textarea
                v-model="khpara2"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 3</label>
              <textarea
                v-model="khpara3"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 4</label>
              <textarea
                v-model="khpara4"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 5</label>
              <textarea
                v-model="khpara5"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 1</label>
              <textarea
                v-model="engpara1"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 2</label>
              <textarea
                v-model="engpara2"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 3</label>
              <textarea
                v-model="engpara3"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 4</label>
              <textarea
                v-model="engpara4"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 5</label>
              <textarea
                v-model="engpara5"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 100px"
                class="form-control"
                required
              />
            </div>
            <button
              @click="updateService1Paragrahp()"
              class="btn btn-primary mt-3 mb-1"
            >
              Update
            </button>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { onMounted, ref } from "vue";
import { ElNotification } from "element-plus";
import {
  getTextService1Page,
  updateTextService1Page,
} from "../../api/PublicWebsiteService";
const loading = ref(true);
const khpara1 = ref("");
const engpara1 = ref("");
const khpara2 = ref("");
const engpara2 = ref("");
const khpara3 = ref("");
const engpara3 = ref("");
const khpara4 = ref("");
const engpara4 = ref("");
const khpara5 = ref("");
const engpara5 = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);

async function getService1Paragrahp() {
  try {
    const res = await getTextService1Page();
    khpara1.value = res.data.bodies[0].descriptionKh;
    engpara1.value = res.data.bodies[0].descriptionEn;

    khpara2.value = res.data.bodies[1].descriptionKh;
    engpara2.value = res.data.bodies[1].descriptionEn;

    khpara3.value = res.data.bodies[2].descriptionKh;
    engpara3.value = res.data.bodies[2].descriptionEn;

    khpara4.value = res.data.bodies[3].descriptionKh;
    engpara4.value = res.data.bodies[3].descriptionEn;

    khpara5.value = res.data.bodies[4].descriptionKh;
    engpara5.value = res.data.bodies[4].descriptionEn;
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
async function updateService1Paragrahp() {
  try {
    const bodyPayloads = [
      {
        descriptionKh: khpara1.value,
        descriptionEn: engpara1.value,
      },
      {
        descriptionKh: khpara2.value,
        descriptionEn: engpara2.value,
      },
      {
        descriptionKh: khpara3.value,
        descriptionEn: engpara3.value,
      },
      {
        descriptionKh: khpara4.value,
        descriptionEn: engpara4.value,
      },
      {
        descriptionKh: khpara5.value,
        descriptionEn: engpara5.value,
      },
    ];
    const res = await updateTextService1Page(bodyPayloads);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Update Success",
      type: "success",
    });
    console.log(res);
  } catch (e) {
    ElNotification({
      title: "Error",
      duration: 2000,
      message: "Update Faild",
      type: "error",
    });
    console.log(e);
  }
}
onMounted(() => {
  getService1Paragrahp();
});
</script>

<style scoped>
.form {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
