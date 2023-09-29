import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/public/HomeView.vue";
import AboutView from "../views/public/AboutView.vue";
import ServiceView from "../views/public/ServiceView.vue";
import ContactView from "../views/public/ContactView.vue";
import OtherView from "../views/public/OtherView.vue";
import Service1 from "../views/public/Service1.vue";
import Service2 from "../views/public/Service2.vue";
import Service3 from "../views/public/Service3.vue";
import Service4 from "../views/public/Service4.vue";

import Dashboard from "../views/admin/DashboardView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/service1",
      name: "service1",
      component: Service1,
    },
    {
      path: "/service2",
      name: "service2",
      component: Service2,
    },
    {
      path: "/service3",
      name: "service3",
      component: Service3,
    },
    {
      path: "/service4",
      name: "service4",
      component: Service4,
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/other",
      name: "other",
      component: OtherView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
  ],
  linkExactActiveClass: "active",
});

export default router;
