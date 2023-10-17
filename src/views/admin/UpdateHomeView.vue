<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <h2>Home Page</h2>
          <div class="container mt-5 form">
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph</label>
              <textarea
                v-model="khpara"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 200px"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph</label>
              <textarea
                v-model="engpara"
                type="text"
                style="background-color: rgb(236, 236, 236); height: 200px"
                class="form-control"
                required
              />
            </div>
            <button
              @click="updateHomeParagrahp()"
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
  getTextHomePage,
  updateTextHomePage,
} from "../../api/PublicWebsiteService";
const loading = ref(true);
const khpara = ref("");
const engpara = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);

async function getHomeParagrahp() {
  try {
    const res = await getTextHomePage();
    khpara.value = res.data.bodies[0].descriptionKh;
    engpara.value = res.data.bodies[0].descriptionEn;
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
async function updateHomeParagrahp() {
  try {
    const bodyPayloads = [
      {
        descriptionKh: khpara.value,
        descriptionEn: engpara.value,
      },
    ];
    const res = await updateTextHomePage(bodyPayloads);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
onMounted(() => {
  getHomeParagrahp();
});
</script>

<style scoped>
.form {
  border: 1px solid black;
  border-radius: 10px;
}
</style>
