<template>
  <div>
    <Sidebar>
      <template v-slot:Content>
        <div
          class="container-xxl"
          v-loading="loading"
          element-loading-background="#f3f3f35d"
        >
          <h2 class="mb-5">Home Page</h2>
          <h5 class="ms-3">Khmer Paragraph</h5>
          <div class="p-2">
            <div class="editor" v-if="editorkh">
              <menu-bar class="editor__header" :editor="editorkh" />
              <editor-content class="p-3" :editor="editorkh" />
            </div>
          </div>

          <h5 class="ms-3">English Paragraph</h5>
          <div class="p-2">
            <div class="editor" v-if="editoreng">
              <menu-bar class="editor__header" :editor="editoreng" />
              <editor-content
                class="editor__content text-left p-1 border-0"
                :editor="editoreng"
              />
            </div>
          </div>

          <el-button
            @click="updateHomeParagrahp()"
            class="mt-3 mb-1"
            type="primary"
          >
            Update
          </el-button>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { onMounted, ref } from "vue";
import { ElNotification } from "element-plus";
import {
  getTextHomePage,
  updateTextHomePage,
} from "../../api/PublicWebsiteService";
import Document from "@tiptap/extension-document";
import History from "@tiptap/extension-history";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import MenuBar from "@/components/tiptap.vue";

const loading = ref(true);
const khpara = ref(null);
const engpara = ref(null);
const editorkh = ref(null);
const editoreng = ref(null);
const valuekh = ref("");
const valueeng = ref("");
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
    valuekh.value = editorkh.value.getHTML();
    valueeng.value = editoreng.value.getHTML();
    const bodyPayloads = [
      {
        descriptionKh: valuekh.value,
        descriptionEn: valueeng.value,
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
onMounted(async () => {
  await getHomeParagrahp();
  editorkh.value = new Editor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      Document,
      Paragraph,
      Text,
      History,
    ],
    content: khpara.value,
  });
  editoreng.value = new Editor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      Document,
      Paragraph,
      Text,
      History,
    ],
    content: engpara.value,
  });
});
</script>

<style scoped lang="scss">
.text {
  border: 1px solid rgb(141, 141, 141);
  border-radius: 5px;
  padding: 10px;
}
.textarea {
  height: 200px;
}
.editor {
  background-color: #fff;
  border: 3px solid #0d0d0d;
  border-radius: 0.75rem;
  color: #0d0d0d;
  display: flex;
  flex-direction: column;
  max-height: 46rem;

  &__header {
    align-items: center;
    background: #0d0d0d;
    border-bottom: 3px solid #0d0d0d;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
  }

  &__content {
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1.25rem 1rem;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
      background-color: #f5f5f5 !important;
    }
  }

  &__footer {
    align-items: center;
    border-top: 3px solid #0d0d0d;
    color: #0d0d0d;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    font-size: 12px;
    font-weight: 600;
    justify-content: space-between;
    padding: 0.25rem 0.75rem;
    white-space: nowrap;
  }

  /* Some information about the status */
  &__status {
    align-items: center;
    border-radius: 5px;
    display: flex;

    &::before {
      background: rgba(#0d0d0d, 0.5);
      border-radius: 50%;
      content: " ";
      display: inline-block;
      flex: 0 0 auto;
      height: 0.5rem;
      margin-right: 0.5rem;
      width: 0.5rem;
    }

    &--connecting::before {
      background: #616161;
    }

    &--connected::before {
      background: #b9f18d;
    }
  }

  &__name {
    button {
      background: none;
      border: none;
      border-radius: 0.4rem;
      color: #0d0d0d;
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      padding: 0.25rem 0.5rem;

      &:hover {
        background-color: #0d0d0d;
        color: #fff;
      }
    }
  }
}

/* Give a remote user a caret */
.collaboration-cursor__caret {
  border-left: 1px solid #0d0d0d;
  border-right: 1px solid #0d0d0d;
  margin-left: -1px;
  margin-right: -1px;
  pointer-events: none;
  position: relative;
  word-break: normal;
}

/* Render the username above the caret */
.collaboration-cursor__label {
  border-radius: 3px 3px 3px 0;
  color: #0d0d0d;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  left: -1px;
  line-height: normal;
  padding: 0.1rem 0.3rem;
  position: absolute;
  top: -1.4em;
  user-select: none;
  white-space: nowrap;
}

/* Basic editor styles */
.ProseMirror {
  &:focus {
    border: 0 !important;
    outline: none !important;
  }

  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem !important;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 16px;
  }
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    border-radius: 0.5rem;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  mark {
    background-color: #faf594;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    border-left: 2px solid rgba(#0d0d0d, 0.1);
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      align-items: center;
      display: flex;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }
}
</style>
