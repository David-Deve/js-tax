<template>
  <p>Are you Sure ? You want delete User ID: {{ id }}</p>
  <span class="dialog-footer">
    <el-button type="primary" @click="handleCancel()"> Cancel </el-button>
    <el-button type="danger" @click="submitDelete()"> Confirm </el-button>
  </span>
</template>
<script setup>
import { deleteUser } from "../api/Service";
import { ElNotification } from "element-plus";
const props = defineProps({
  id: Number,
});
const emits = defineEmits(["cancelDelete"]);
const handleCancel = () => {
  emits("cancelDelete");
};
async function submitDelete() {
  try {
    await deleteUser(props.id);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Delete User Success",
      type: "success",
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
  } catch (e) {
    console.error(e);
    ElNotification({
      title: "Warning",
      duration: 2000,
      message: "Delete User Failed",
      type: "error",
    });
  }
}
</script>
