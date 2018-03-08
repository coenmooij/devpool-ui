<template>
    <div class="login">


        <div class="alert alert-danger text-center" role="alert" v-if="error">Incorrect email/password combination</div>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" id="email" name="email" type="text" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" id="password" type="password" v-model="password">
            </div>
            <div class="divider"></div>
            <button type="submit" class="btn btn-success text-white" @click.prevent="login">
                <i class="fa fa-arrow-right"></i> Login
            </button>
            <div class="clearfix"></div>
        </form>

    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: false,
      };
    },
    computed: {
      ...mapGetters({
        token: 'getToken',
      }),
    },
    methods: {
      ...mapActions({
        setToken: 'setToken',
      }),
      login(){
        this.$http.post('authentication/login', {
          email: this.email,
          password: this.password,
        }).then(response => response.json())
          .then(data => {
            if (data.token) {
              this.setToken(data.token);
            }
            this.$router.push({name: 'Dashboard'});
          }).catch(function (error) {
          this.error = error;
        });
      },
    },
  };
</script>

<style scoped>
    button {
        width: 100%;
    }
</style>
