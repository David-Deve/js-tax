import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import messages from "./lang.js";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "boxicons";
import VueCookie from "vue-cookies";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
  legacy: false,
});

const app = createApp(App);
app.use(createPinia());
app.use(VueCookie);
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.mount("#app");
