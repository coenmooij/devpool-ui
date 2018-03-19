import Vue from "vue";
import Router from "vue-router";
import AuthenticationView from "@/components/authentication/Authentication";
import authenticationRoutes from "./authentication";
import developerRoutes from "./developer";
import backofficeRoutes from "./backoffice";
import MainView from "@/components/layout/Main";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "AuthenticationView",
      component: AuthenticationView,
      redirect: { name: "Login" },
      meta: { isPublic: true },
      children: authenticationRoutes
    },
    {
      path: "/",
      name: "DeveloperView",
      component: MainView,
      redirect: { name: "DeveloperDashboard" },
      meta: { isPrivate: true, isDeveloper: true },
      children: developerRoutes
    },
    {
      path: "/",
      name: "main",
      component: MainView,
      redirect: { name: "BackofficeDashboard" },
      meta: { isPrivate: true, isBackofficeUser: true },
      children: backofficeRoutes
    }
  ]
});
