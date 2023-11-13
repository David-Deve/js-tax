<template>
  <div class="bg-gray-900 py-5 flex">
    <template v-for="(item, index) in items" :key="index">
      <div class="divider" v-if="item.type === 'divider'" />
      <menu-item v-else v-bind="item" />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import menuItem from "./menuItem.vue";
const props = defineProps(["editor"]);
const items = ref([
  {
    icon: "bold",
    title: "Bold",
    action: () => editor.chain().focus().toggleBold().run(),
    isActive: () => editor.isActive("bold"),
  },
  {
    icon: "italic",
    title: "Italic",
    action: () => editor.chain().focus().toggleItalic().run(),
    isActive: () => editor.isActive("italic"),
  },
  {
    icon: "strikethrough",
    title: "Strike",
    action: () => editor.chain().focus().toggleStrike().run(),
    isActive: () => editor.isActive("strike"),
  },
  {
    icon: "mark-pen-line",
    title: "Highlight",
    action: () => editor.chain().focus().toggleHighlight().run(),
    isActive: () => editor.isActive("highlight"),
  },
  { type: "divider" },
  {
    icon: "h-1",
    title: "Heading 1",
    action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => editor.isActive("heading", { level: 1 }),
  },
  {
    icon: "h-2",
    title: "Heading 2",
    action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => editor.isActive("heading", { level: 2 }),
  },
  {
    icon: "h-3",
    title: "Heading 3",
    action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: () => editor.isActive("heading", { level: 3 }),
  },
  {
    icon: "paragraph",
    title: "Paragraph",
    action: () => editor.chain().focus().setParagraph().run(),
    isActive: () => editor.isActive("paragraph"),
  },
  {
    icon: "list-unordered",
    title: "Bullet List",
    action: () => editor.chain().focus().toggleBulletList().run(),
    isActive: () => editor.isActive("bulletList"),
  },
  {
    icon: "list-ordered",
    title: "Ordered List",
    action: () => editor.chain().focus().toggleOrderedList().run(),
    isActive: () => editor.isActive("orderedList"),
  },

  { type: "divider" },
  {
    icon: "separator",
    title: "Horizontal Rule",
    action: () => editor.chain().focus().setHorizontalRule().run(),
  },
  { type: "divider" },
  {
    icon: "text-wrap",
    title: "Hard Break",
    action: () => editor.chain().focus().setHardBreak().run(),
  },
  {
    icon: "format-clear",
    title: "Clear Format",
    action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
  },
  { type: "divider" },
  {
    icon: "arrow-go-back-line",
    title: "Undo",
    action: () => editor.chain().focus().undo().run(),
  },
  {
    icon: "arrow-go-forward-line",
    title: "Redo",
    action: () => editor.chain().focus().redo().run(),
  },
]);

const { editor } = props;
</script>

<style lang="scss" scoped>
.divider {
  background-color: rgba(#fff, 0.25);
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.75rem;
  width: 1px;
}
</style>
