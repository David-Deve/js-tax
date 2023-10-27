import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import { loadMessage } from "./lang.js";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueCookie from "vue-cookies";
const app = createApp(App);
loadMessage().then((messages) => {
  const i18n = createI18n({
    locale: "kh",
    fallbackLocale: "kh",
    messages,
    legacy: false,
  });
  app.use(createPinia());
  app.use(VueCookie);
  app.use(router);
  app.use(i18n);
  app.use(ElementPlus);
  app.mount("#app");
});
