<template>
  <nav class="navbar bg-dark justify-content-between">
    <div class="container">
      <router-link 
        to="/"
        tag="a" 
        class="navbar-brand">
        <span class="text-white">Caspar Coding Developers</span>
      </router-link>
      <span class="navbar-right">
        <a 
          href="#"
          @click.prevent="logout">
          Logout
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      clearToken: "clearToken",
      clearType: "clearType"
    }),
    logout() {
      this.$http
        .get("authentication/logout")
        .then(response => {
          return response.json();
        })
        .then(() => {
          this.clearToken();
          this.clearType();
          this.$router.push({ name: "AuthenticationView" });
        });
    }
  }
};
</script>

<style scoped>
a {
  color: #f4f4f4;
}

a:hover {
  text-decoration: underline;
}
</style>
