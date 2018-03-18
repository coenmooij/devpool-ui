<template>
    <div class="register">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-danger" v-if="error">Registration Failed</div>
                <form>
                    <div class="form-group">
                        <label for="firstName">First Name*</label>
                        <input
                        class="form-control"
                        id="firstName"
                        name="firstName"
                        type="text"
                        v-model="firstName"
                        v-validate="'required|alpha_spaces'
                        ">
                        <small v-if="showErrors && errors.has('firstName')" class="form-text text-danger">
                            <span
                               class="fa fa-remove help is-danger"></span>
                            {{ errors.first('firstName') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name*</label>
                        <input class="form-control" id="lastName" name="lastName" type="text" v-model="lastName"
                               v-validate="'required|alpha_spaces'">
                        <small v-if="showErrors && errors.has('lastName')" class="form-text text-danger"><span
                                class="fa fa-remove help is-danger"></span>
                            {{ errors.first('lastName') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input class="form-control" id="email" name="email" type="text" v-model.lazy="email"
                               v-validate="'required|email'">
                        <small v-if="showErrors && errors.has('email')" class="form-text text-danger"><span
                                class="fa fa-remove help is-danger"></span>
                            {{ errors.first('email') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password*</label>
                        <input class="form-control" id="password" name="password" type="password"
                               v-model.lazy="password" v-validate="'required|alpha_dash|min:6'">
                        <small v-if="showErrors && errors.has('password')" class="form-text text-danger"><span
                                class="fa fa-remove help is-danger"></span>
                            {{ errors.first('password') }}
                        </small>
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-success pull-right" @click.prevent="submit">
                        <span class="fa fa-user"></span> Register
                    </button>
                    <div class="clearfix"></div>
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
      this.$validator.validateAll().then((result) => {
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
        .then((response) => response.json())
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
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
