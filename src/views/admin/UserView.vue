<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div class="container-xxl">
          <div class="row">
            <div class="col-md-12 mb-5">
              <h2>All User</h2>
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="index"> </el-table-column>
                <el-table-column label="Name">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <i class="bx bx-user"></i>
                      <span style="margin-left: 10px">{{
                        scope.row.name
                      }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Gender">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <div v-if="scope.row.gender == 'male'">
                        <i class="bx bx-male"></i>
                      </div>
                      <div v-if="scope.row.gender == 'female'">
                        <i class="bx bx-female"></i>
                      </div>
                      <span style="margin-left: 10px">{{
                        scope.row.gender
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Create Date">
                  <template #default="scope">
                    <div style="display: flex; align-items: center">
                      <span style="margin-left: 10px">{{
                        scope.row.date
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
                        <div>name: {{ scope.row.name }}</div>
                        <div>address: {{ scope.row.address }}</div>
                      </template>
                      <template #reference>
                        <el-tag type="success">{{ scope.row.phone }}</el-tag>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="Operations">
                  <template #default="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.$index, scope.row)"
                      >Edit</el-button
                    >
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                      >Delete</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "../../components/Sidebar.vue";

const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};

const tableData = [
  {
    name: "Tom",
    gender: "male",
    date: "2016-05-03",
    phone: "045 622 355",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    gender: "male",
    phone: "045 622 355",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    gender: "female",
    phone: "045 622 355",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    gender: "male",
    phone: "045 622 355",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
