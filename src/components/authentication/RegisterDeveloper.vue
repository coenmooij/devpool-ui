<template>
  <div class="register">
    <div class="panel panel-default">
      <div class="panel-body">
        <div
          v-if="error"
          class="alert alert-danger">
          Registration Failed
        </div>
        <form>
          <div class="form-group">
            <label for="firstName">First Name*</label>
            <input
              v-validate="'required|alpha_spaces'"
              id="firstName"
              v-model="firstName"
              class="form-control"
              name="firstName"
              type="text">
            <small 
              v-if="showErrors && errors.has('firstName')" 
              class="form-text text-danger">
              <span class="fa fa-remove help is-danger"/>
              {{ errors.first('firstName') }}
            </small>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name*</label>
            <input
              v-validate="'required|alpha_spaces'"
              id="lastName"
              v-model="lastName"
              class="form-control"
              name="lastName" 
              type="text">
            <small 
              v-if="showErrors && errors.has('lastName')" 
              class="form-text text-danger">
              <span class="fa fa-remove help is-danger"/>
              {{ errors.first('lastName') }}
            </small>
          </div>
          <div class="form-group">
            <label for="email">Email*</label>
            <input 
              v-validate="'required|email'"
              id="email"
              v-model.lazy="email"
              class="form-control"
              name="email" 
              type="text">
            <small 
              v-if="showErrors && errors.has('email')" 
              class="form-text text-danger">
              <span class="fa fa-remove help is-danger"/>
              {{ errors.first('email') }}
            </small>
          </div>
          <div class="form-group">
            <label for="password">Password*</label>
            <input
              v-validate="'required|alpha_dash|min:6'" 
              id="password" 
              v-model.lazy="password" 
              class="form-control"
              name="password" 
              type="password">
            <small 
              v-if="showErrors && errors.has('password')" 
              class="form-text text-danger">
              <span class="fa fa-remove help is-danger"/>
              {{ errors.first('password') }}
            </small>
          </div>
          <div class="divider"/>
          <button 
            type="submit" 
            class="btn btn-success pull-right" 
            @click.prevent="submit">
            <i class="fa fa-user"/> Register
          </button>
          <div class="clearfix"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: false,
      showErrors: false
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.register();
        } else {
          this.showErrors = true;
        }
      });
    },
    register() {
      this.$http
        .post("authentication/register-developer", {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(response => response.json())
        .then(() => {
          this.$router.push({ name: "Login" });
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

form {
  padding: 10px;
}
</style>
