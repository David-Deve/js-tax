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

              <p class="text">{{ khpara }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph</label>
              <p class="text">{{ engpara }}</p>
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
    <span>Khmer text</span>
    <textarea class="textarea form-control" type="text" v-model="khpara" />
    <br />
    <span>English text</span>
    <textarea class="textarea form-control" type="text" v-model="engpara" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateHomeParagrahp()">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { onMounted, ref } from "vue";
import { ElNotification } from "element-plus";
import {
  getTextHomePage,
  updateTextHomePage,
} from "../../api/PublicWebsiteService";
const dialogVisible = ref(false);
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
  getHomeParagrahp();
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
