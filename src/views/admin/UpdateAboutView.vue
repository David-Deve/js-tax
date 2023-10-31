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
              <p class="text">{{ khpara1 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Khmer Paragraph 2</label>
              <p class="text">{{ khpara2 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 1</label>
              <p class="text">{{ engpara1 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 2</label>
              <p class="text">{{ engpara2 }}</p>
            </div>
            <el-button
              @click="dialogVisible = true"
              class="mt-3 mb-1"
              type="primary"
            >
              Update
            </el-button>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
  <el-dialog v-model="dialogVisible" title="Update Text HomePage" width="80%">
    <span>Khmer Paragraph 1</span>
    <textarea class="textarea form-control" type="text" v-model="khpara1" />
    <span>Khmer Paragraph 2</span>
    <textarea class="textarea form-control" type="text" v-model="khpara2" />
    <br />
    <span>English Paragraph 1</span>
    <textarea class="textarea form-control" type="text" v-model="engpara1" />
    <span>English Paragraph 2</span>
    <textarea class="textarea form-control" type="text" v-model="engpara2" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateAboutParagrahp()">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { onMounted, ref } from "vue";
import {
  getTextAboutPage,
  updateTextAboutPage,
} from "../../api/PublicWebsiteService";
import { ElNotification } from "element-plus";
const dialogVisible = ref(false);
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
      message: "Update Success",
      type: "error",
    });
    console.log(e);
  }
}
onMounted(() => {
  getAboutParagrahp();
});
</script>

<style scoped>
.text {
  border: 1px solid rgb(141, 141, 141);
  border-radius: 5px;
  padding: 10px;
}
.textarea {
  height: 200px;
}
</style>
