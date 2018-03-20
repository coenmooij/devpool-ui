import Vue from "vue";
import Router from "vue-router";

import MainView from "@/components/layout/MainView";
import AuthenticationView from "@/components/authentication/AuthenticationView";
import BackofficeView from "@/components/backoffice/BackofficeView";
import DeveloperView from "@/components/developer/DeveloperView";
import AdminView from "@/components/admin/AdminView";
import ClientView from "@/components/client/ClientView";

import authenticationRoutes from "./authentication";
import developerRoutes from "./developer";
import backofficeRoutes from "./backoffice";
import adminRoutes from "./admin";
import clientRoutes from "./client";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/authentication/",
      name: "AuthenticationView",
      component: AuthenticationView,
      redirect: { name: "Login" },
      meta: { isPublic: true },
      children: authenticationRoutes
    },
    {
      path: "/",
      name: "MainView",
      component: MainView,
      redirect: { name: "DeveloperView" },
      meta: { isPrivate: true },
      children: [
        {
          path: "developer",
          name: "DeveloperView",
          meta: { isDeveloper: true },
          component: DeveloperView,
          redirect: { name: "Profile" },
          children: developerRoutes
        },
        {
          path: "backoffice",
          name: "BackofficeView",
          component: BackofficeView,
          meta: { isBackofficeUser: true },
          redirect: { name: "DeveloperList" },
          children: backofficeRoutes
        },
        {
          path: "admin",
          name: "AdminView",
          component: AdminView,
          meta: { isAdmin: true },
          redirect: { name: "AdminDashboard" },
          children: adminRoutes
        },
        {
          path: "client",
          name: "ClientView",
          component: ClientView,
          meta: { isClient: true },
          redirect: { name: "ClientDashboard" },
          children: clientRoutes
        }
      ]
    }
  ]
});
