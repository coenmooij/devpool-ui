<template>
  <div class="login">
    <div
      v-if="error"
      class="alert alert-danger text-center"
      role="alert">
      Incorrect email/password combination
    </div>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email"
          v-model="email"
          class="form-control" 
          name="email" 
          type="text">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          id="password" 
          v-model="password" 
          class="form-control" 
          type="password">
      </div>
      <div class="divider"/>
      <button 
        type="submit" 
        class="btn btn-success text-white" 
        @click.prevent="login">
        <i class="fa fa-arrow-right"/> Login
      </button>
      <div class="clearfix"/>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    ...mapActions({
      setToken: "setToken",
      setType: "setType"
    }),
    login() {
      this.$http
        .post("authentication/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setToken(data.data.token);
          this.setType(data.data.type);
          this.$router.push({ name: "MainView" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
button {
  width: 100%;
}
</style>
