<template>
  <p>Are you Sure ? You want delete User ID: {{ id }}</p>
  <span class="dialog-footer">
    <el-button type="primary" @click="handleCancel"> Cancel </el-button>
    <el-button type="danger" @click="handleDelete()"> Confirm </el-button>
  </span>
</template>
<script setup>
defineProps({
  id: String,
});
const emits = defineEmits(["cancelDelete"]);
const handleCancel = () => {
  emits("cancelDelete");
};
</script>
