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
            <div class="col-md-12 mb-5">
              <h2>All Client</h2>
              <el-table
                :data="filterTableData"
                stripe
                style="width: 100%"
                height="500"
                v-loading="loading"
              >
                <el-table-column type="index"> </el-table-column>
                <el-table-column label="Khmer Name">
                  <template #default="scope">
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        font-family: Hanuman;
                      "
                    >
                      <i class="bx bx-user"></i>
                      <span style="margin-left: 10px">{{
                        scope.row.khmerName
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="English Name">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.engName
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Vattin">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.vattin
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Create Date">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.createDate
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="PhoneNumber">
                  <template #default="scope">
                    <el-popover
                      effect="light"
                      trigger="hover"
                      placement="top"
                      width="auto"
                    >
                      <template #default>
                        <div>CompanyName: {{ scope.row.companyName }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{ scope.row.phone }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template #header>
                    <el-input
                      v-model="search"
                      size="small"
                      placeholder="Type EnglishName to search"
                    />
                  </template>
                  <template #default="scope">
                    <el-button
                      size="small"
                      @click="handleGetIdUpdate(scope.row.id)"
                      >Edit
                    </el-button>
                    <!-- <el-button
                      size="small"
                      type="primary"
                      @click="handleGetIdUpdate(scope.row.id)"
                      >Detail
                    </el-button> -->
                    <!-- <el-button
                      size="small"
                      type="danger"
                      @click="handleGetIdDelete(scope.row.id)"
                      >Delete
                    </el-button> -->
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <el-button @click="dialogFormCreate = true" type="primary"
            >Create</el-button
          >
        </div>
      </template>
    </Sidebar>
  </div>
  <!-- Dialog for create  -->
  <el-dialog v-model="dialogFormCreate" title="Create">
    <div
      class="container-xxl"
      v-loading="loading"
      element-loading-background="#f3f3f35d"
    >
      <div class="container mt-5">
        <el-form label-position="top">
          <div class="mb-3">
            <el-form-item label="KhmerName">
              <el-input v-model="khname"></el-input>
            </el-form-item>
          </div>
          <div class="mb-3">
            <el-form-item label="EnglishName">
              <el-input v-model="engname"></el-input>
            </el-form-item>
          </div>
          <div class="mb-3">
            <el-form-item label="Email">
              <el-input v-model="email"></el-input>
            </el-form-item>
          </div>
          <div class="mb-3">
            <el-form-item label="Phone Number">
              <el-input v-model="phone" type="number"></el-input>
            </el-form-item>
          </div>
          <div class="mb-3">
            <el-form-item label="Address">
              <el-input v-model="address" type="text"></el-input>
            </el-form-item>
          </div>
          <div class="mb-3">
            <el-form-item label="Vattin">
              <el-input v-model="vattin" type="text"></el-input>
            </el-form-item>
          </div>
          <div class="mb-3">
            <el-form-item label="CompanyName">
              <el-input v-model="compname" type="text"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <button @click="register()" class="btn btn-primary mt-3 mb-1">
          Register
        </button>
      </div>
    </div>
  </el-dialog>
  <!-- Dialog for delete  -->

  <!-- Dialog for Update -->
  <el-dialog v-model="dialogFormUpdate">
    <p>Update User ID: {{ id }}</p>
    <div class="container mt-5">
      <el-form label-position="top">
        <div class="mb-3">
          <el-form-item label="KhmerName">
            <el-input v-model="khname"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="EnglishName">
            <el-input v-model="engname"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Email">
            <el-input v-model="email"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Phone Number">
            <el-input v-model="phone" type="number"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Address">
            <el-input v-model="address" type="text"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="Vattin">
            <el-input v-model="vattin" type="text"></el-input>
          </el-form-item>
        </div>
        <div class="mb-3">
          <el-form-item label="CompanyName">
            <el-input v-model="compname" type="text"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <button @click="handleUpdate()" class="btn btn-primary mt-3 mb-1">
        Update
      </button>
    </div>
  </el-dialog>
</template>
<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { getClient, getClientId, updateClient } from "../../api/Service";
import { ref, onMounted, computed } from "vue";
import dayjs from "dayjs";
import { createClient } from "../../api/Service";
import { ElNotification } from "element-plus";
const tableData = ref([]);
const dialogFormCreate = ref(false);
const dialogFormUpdate = ref(false);
const id = ref("");
const loading = ref(true);
const khname = ref("");
const engname = ref("");
const email = ref("");
const phone = ref("");
const address = ref("");
const vattin = ref("");
const compname = ref("");
const search = ref("");
setTimeout(() => {
  loading.value = false;
}, 300);
async function getUser() {
  try {
    const response = await getClient();
    tableData.value = response.data.map((item) => ({
      ...item,
      createDate: dayjs(item.createDate).format("YYYY-MM-DD HH:mm:ss A"),
    }));
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  } catch (e) {
    console.log(e);
  }
}
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.engName.toLowerCase().includes(search.value.toLowerCase())
  )
);
async function register() {
  try {
    await createClient(
      khname.value,
      engname.value,
      email.value,
      phone.value,
      address.value,
      vattin.value,
      compname.value
    );
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Create Client Success",
      type: "success",
    });
    setTimeout(() => {
      getUser();
      dialogFormCreate.value = false;
    }, 100);
  } catch (e) {
    console.warn(e);
  }
}

async function handleGetIdUpdate(row) {
  dialogFormUpdate.value = true;
  console.log(row);
  id.value = row;
  try {
    const res = await getClientId(id.value);
    console.log(res.data);
    khname.value = res.data.khmerName;
    engname.value = res.data.engName;
    email.value = res.data.email;
    phone.value = res.data.phone;
    address.value = res.data.address;
    vattin.value = res.data.vattin;
    compname.value = res.data.companyName;
  } catch (e) {
    console.log(e);
  }
}
async function handleUpdate() {
  try {
    await updateClient(
      id.value,
      khname.value,
      engname.value,
      email.value,
      phone.value,
      address.value,
      vattin.value,
      compname.value
    );
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Update Client Success",
      type: "success",
    });
    setTimeout(() => {
      getUser();
      dialogFormUpdate.value = false;
    }, 100);
  } catch (e) {
    console.warn(e);
  }
}

onMounted(() => {
  getUser();
});
</script>
