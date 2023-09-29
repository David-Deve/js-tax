import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";
import ContactView from "../views/ContactView.vue";
import OtherView from "../views/OtherView.vue";
import Service1 from "../views/Service1.vue";
import Service2 from "../views/Service2.vue";
import Service3 from "../views/Service3.vue";
import Service4 from "../views/Service4.vue";
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
  ],
  linkExactActiveClass: "active",
});

export default router;
