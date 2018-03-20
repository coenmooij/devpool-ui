// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import VeeValidate from "vee-validate";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.use(VueResource);
Vue.use(VeeValidate);

Vue.http.options.root = "http://api.devpool.test";

Vue.http.interceptors.push((request, next) => {
  request.headers.set("token", store.getters.getToken);
  next(response => {
    if (response.status === 401) {
      store.dispatch("clearToken");
      router.push({ name: "AuthenticationView" });
    }
  });
});

function redirect() {
  if (store.getters.isBackofficeUser) {
    return "BackofficeView";
  } else if (store.getters.isDeveloper) {
    return "DeveloperView";
  } else if (store.getters.isAdmin) {
    return "AdminView";
  } else if (store.getters.isClient) {
    return "ClientView";
  }
  return "AuthenticationView";
}

router.beforeResolve((to, from, next) => {
  // Set up user status
  store.dispatch("loadToken");
  store.dispatch("loadType");
  const loggedIn = store.getters.isLoggedIn;

  // Redirect not logged in users to authentication view
  if (to.matched.some(record => record.meta.isPrivate) && !loggedIn) {
    next({ name: "AuthenticationView" });
  }

  // Redirect logged in users to their dashboard
  if (to.matched.some(record => record.meta.isPublic) && loggedIn) {
    next({ name: redirect() });
  }

  // Redirect people who are trying to access forbidden routes
  if (
    (to.matched.some(record => record.meta.isDeveloper) &&
      !store.getters.isDeveloper) ||
    (to.matched.some(record => record.meta.isBackofficeUser) &&
      !store.getters.isBackofficeUser) ||
    (to.matched.some(record => record.meta.isAdmin) &&
      !store.getters.isAdmin) ||
    (to.matched.some(record => record.meta.isClient) && !store.getters.isClient)
  ) {
    next({ name: redirect() });
  }
  next();
});

Vue.config.productionTip = false;

Vue.filter(
  "capitalize",
  value => value.charAt(0).toUpperCase() + value.slice(1)
);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
