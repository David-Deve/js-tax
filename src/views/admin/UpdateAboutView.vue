<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <h2>About Page</h2>
          <div class="container mt-5 mb-3 form">
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 1</label>
              <textarea
                v-model="khpara1"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 200px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 2</label>
              <textarea
                v-model="khpara2"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 200px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 1</label>
              <textarea
                v-model="engpara1"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 200px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 2</label>
              <textarea
                v-model="engpara2"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 200px"
                class="form-control"
                required
              />
            </div>
            <button
              @click="updateAboutParagrahp()"
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
import {
  getTextAboutPage,
  updateTextAboutPage,
} from "../../api/PublicWebsiteService";
const loading = ref(true);
const khpara1 = ref("");
const engpara1 = ref("");
const khpara2 = ref("");
const engpara2 = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);

async function getAboutParagrahp() {
  try {
    const res = await getTextAboutPage();
    khpara1.value = res.data.bodies[0].descriptionKh;
    engpara1.value = res.data.bodies[0].descriptionEn;

    khpara2.value = res.data.bodies[1].descriptionKh;
    engpara2.value = res.data.bodies[1].descriptionEn;
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
async function updateAboutParagrahp() {
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
    ];
    const res = await updateTextAboutPage(bodyPayloads);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  getAboutParagrahp();
});
</script>

<style scoped>
.form {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
