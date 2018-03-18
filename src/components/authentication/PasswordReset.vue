<template>
    <div class="password-reset">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-success text-center" v-if="showSuccessMessage">
                    <p><span class="fa fa-ok"></span> Instructions to reset your password have been sent to your email address.</p><br>
                    <button class="btn btn-success" @click="redirect">Naar inloggen</button>
                </div>
                <form>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input class="form-control" id="email" name="Email" type="text" v-model.lazy="email"
                               v-validate="'required|email'">
                        <small v-if="showErrors && errors.has('Email')" class="form-text text-danger"><span
                                class="fa fa-remove help is-danger"></span>
                            {{ errors.first('Email') }}
                        </small>
                    </div>
                    <div class="divider"></div>
                    <button type="submit" class="btn btn-danger pull-right" @click.prevent="submit">
                        <span class="fa fa-repeat"></span> Reset Password
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
      email: "",
      showSuccessMessage: false,
      showErrors: false
    };
  },
  methods: {
    redirect() {
      this.$router.push("/");
    },
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.reset();
        } else {
          this.showErrors = true;
        }
      });
    },
    reset() {
      this.$http
        .post("authentication/resetPassword", {
          email: this.email
        })
        .then(response => {
          response.json();
        })
        .then(() => {
          this.showSuccessMessage = true;
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
