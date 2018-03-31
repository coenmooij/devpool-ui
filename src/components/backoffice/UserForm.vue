<template>
  <div class="card">
    <h5 class="card-header">
      User settings
    </h5>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input 
            id="firstName"
            v-model="firstName"            
            type="text" 
            class="form-control"
            autocomplete="given-name"
            @input="change">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input 
            id="lastName"
            v-model="lastName"
            type="text" 
            class="form-control"
            autocomplete="family-name"
            @input="change">
        </div>
        <div class="form-group">
          <label for="nickname">Nickname</label>
          <input 
            id="nickname"
            v-model="nickname"
            type="text" 
            class="form-control"
            @input="change">
        </div>
        <div class="form-check">
          <input 
            id="showNickname"
            v-model="showNickname"
            type="checkbox" 
            class="form-check-input"
            @click="change">
          <label for="showNickname">Display nickname instead of full name</label>
        </div>
        <div class="action-bar">
          <button
            v-if="saved"
            type="submit" 
            class="btn btn-success"
            disabled
            @click.prevent>
            <i class="fa fa-check"/> Saved
          </button>
          <button
            v-else
            type="submit" 
            class="btn btn-success"
            @click.prevent="save">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      saved: false,
      firstName: null,
      lastName: null,
      nickname: null,
      showNickname: null
    };
  },
  created() {
    this.id = this.user.id;
    this.firstName = this.user.first_name;
    this.lastName = this.user.last_name;
    this.nickname = this.user.nickname ? this.user.nickname : "";
    this.showNickname = this.user.show_nickname ? true : false;
  },
  methods: {
    change() {
      this.saved = false;
    },
    save() {
      this.$http
        .patch("authentication/users/" + this.id, {
          first_name: this.firstName,
          last_name: this.lastName,
          nickname: this.nickname,
          show_nickname: this.showNickname
        })
        .then(response => response.json())
        .then(() => {
          this.saved = true;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
.action-bar {
  text-align: right;
}
</style>
