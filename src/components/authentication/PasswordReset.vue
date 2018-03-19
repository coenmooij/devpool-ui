<template>
  <div class="password-reset">
    <div class="panel panel-default">
      <div class="panel-body">
        <div
          v-if="showSuccessMessage" 
          class="alert alert-success text-center">
          <p><i class="fa fa-ok"/> Instructions to reset your password have been sent to your email address.</p><br>
          <button 
            class="btn btn-success"
            @click="redirect">
            Naar inloggen
          </button>
        </div>
        <form>
          <div class="form-group">
            <label for="email">Email*</label>
            <input 
              v-validate="'required|email'"
              id="email" 
              v-model.lazy="email"
              class="form-control" 
              name="Email" 
              type="text">
            <small 
              v-if="showErrors && errors.has('Email')" 
              class="form-text text-danger">
              <i class="fa fa-remove help is-danger"/>
              {{ errors.first('Email') }}
            </small>
          </div>
          <div class="divider"/>
          <button 
            type="submit" 
            class="btn btn-danger pull-right" 
            @click.prevent="submit">
            <i class="fa fa-repeat"/> Reset Password
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
