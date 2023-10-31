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
              <p class="text">{{ khpara1 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Location (Khmer)</label>
              <p class="text">{{ khpara2 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Working Time (Khmer)</label>
              <p class="text">{{ khpara3 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Email (Khmer )</label>
              <p class="text">{{ khpara4 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Phone number (Khmer)</label>
              <p class="text">{{ khpara5 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">English Paragraph 1</label>
              <p class="text">{{ engpara1 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Location (English)</label>
              <p class="text">{{ engpara2 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Working Time (English)</label>
              <p class="text">{{ engpara3 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Email (English)</label>
              <p class="text">{{ engpara4 }}</p>
            </div>
            <div class="mb-3">
              <label class="form-label">Phone number (English)</label>
              <p class="text">{{ engpara5 }}</p>
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
    <span>Khmer Paragraph</span>
    <textarea class="textarea form-control" type="text" v-model="khpara1" />
    <span>Khmer Location</span>
    <textarea class="textarea form-control" type="text" v-model="khpara2" />
    <span>Khmer working time</span>
    <textarea class="textarea form-control" type="text" v-model="khpara3" />
    <span>Khmer Email</span>
    <textarea class="textarea form-control" type="text" v-model="khpara4" />
    <span>Khmer Phonenumber</span>
    <textarea class="textarea form-control" type="text" v-model="khpara5" />
    <br />
    <span>English Paragraph</span>
    <textarea class="textarea form-control" type="text" v-model="engpara1" />
    <span>English Location</span>
    <textarea class="textarea form-control" type="text" v-model="engpara2" />
    <span>English working time</span>
    <textarea class="textarea form-control" type="text" v-model="engpara3" />
    <span>English Email</span>
    <textarea class="textarea form-control" type="text" v-model="engpara4" />
    <span>English Phonenumber</span>
    <textarea class="textarea form-control" type="text" v-model="engpara5" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateContactParagrahp()">
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
  getTextContactPage,
  updateTextContactPage,
} from "../../api/PublicWebsiteService";
const dialogVisible = ref(false);
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

async function getContactParagrahp() {
  try {
    const res = await getTextContactPage();
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
async function updateContactParagrahp() {
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
    const res = await updateTextContactPage(bodyPayloads);
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
      message: "Update faild",
      type: "error",
    });
    console.log(e);
  }
}
onMounted(() => {
  getContactParagrahp();
});
</script>

<style scoped>
.text {
  border: 1px solid rgb(141, 141, 141);
  border-radius: 5px;
  padding: 10px;
}
</style>
