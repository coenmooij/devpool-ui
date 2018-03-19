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
      router.push("/");
    }
  });
});

router.beforeEach((to, from, next) => {
  store.dispatch("loadToken");
  const loggedIn = store.getters.isLoggedIn;
  if (to.matched.some(record => record.meta.isPublic)) {
    if (loggedIn) {
      next({ name: "Dashboard" });
    }
    next();
  } else if (to.matched.some(record => record.meta.isPrivate)) {
    if (!loggedIn) {
      next({ name: "Login" });
    }
    next();
  }
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
