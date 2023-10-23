// Public Website Route
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/public/HomeView.vue";
import AboutView from "../views/public/AboutView.vue";
import ServiceView from "../views/public/ServiceView.vue";
import ContactView from "../views/public/ContactView.vue";
import OtherView from "../views/public/OtherView.vue";
import Service1 from "../views/public/Service1.vue";
import Service2 from "../views/public/Service2.vue";
import VueCookies from "vue-cookies";

//Admin Route
import Dashboard from "../views/admin/DashboardView.vue";
import User from "../views/admin/UserView.vue";
import CreateUser from "../views/admin/CreateUserView.vue";
import UpdateAboutView from "../views/admin/UpdateAboutView.vue";
import UpdateHomeView from "../views/admin/UpdateHomeView.vue";
import UpdateService1View from "../views/admin/UpdateService1View.vue";
import UpdateService2View from "../views/admin/UpdateService2View.vue";
import UpdateContactView from "../views/admin/UpdateContactView.vue";
import Consultation from "../views/admin/ConsultationView.vue";
import CreateClient from "../views/admin/CreateClientView.vue";
import ClientView from "../views/admin/ClientView.vue";
import InvoiceView from "../views/admin/InvoiceView.vue";
import AllInvoiceView from "../views/admin/AllInvoice.vue";
import AllTaxView from "../views/admin/AllTaxView.vue";
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
      meta: { requiresAuth: true },
    },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: { requiresAuth: true },
    },
    {
      path: "/createuser",
      name: "createuser",
      component: CreateUser,
      meta: { requiresAuth: true },
    },
    {
      path: "/updateaboutpage",
      name: "updateaboutpage",
      component: UpdateAboutView,
      meta: { requiresAuth: true },
    },
    {
      path: "/updatehomepage",
      name: "updatehomepage",
      component: UpdateHomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/updateservice1",
      name: "updateservice1",
      component: UpdateService1View,
      meta: { requiresAuth: true },
    },
    {
      path: "/updateservice2",
      name: "updateservice2",
      component: UpdateService2View,
      meta: { requiresAuth: true },
    },
    {
      path: "/updatecontact",
      name: "updatecontact",
      component: UpdateContactView,
      meta: { requiresAuth: true },
    },
    {
      path: "/consultation",
      name: "consultation",
      component: Consultation,
      meta: { requiresAuth: true },
    },
    {
      path: "/createclient",
      name: "createclient",
      component: CreateClient,
      meta: { requiresAuth: true },
    },
    {
      path: "/client",
      name: "client",
      component: ClientView,
      meta: { requiresAuth: true },
    },
    {
      path: "/invoice/:id",
      name: "invoice",
      component: InvoiceView,
      meta: { requiresAuth: true },
    },
    {
      path: "/allinvoice",
      name: "allinvoicev",
      component: AllInvoiceView,
      meta: { requiresAuth: true },
    },
    {
      path: "/alltax",
      name: "alltax",
      component: AllTaxView,
      meta: { requiresAuth: true },
    },
  ],
  linkExactActiveClass: "active",
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = VueCookies.get("jstoken");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresNoAuth = to.matched.some(
    (record) => record.meta.requiresNoAuth
  );
  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else if (requiresNoAuth && isAuthenticated) {
    next("/home");
  } else {
    next();
  }
  0.0;
});
export default router;
