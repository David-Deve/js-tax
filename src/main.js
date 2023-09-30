import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "boxicons";
import VueCookie from "vue-cookies";

const app = createApp(App);
app.use(createPinia());
app.use(VueCookie);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
