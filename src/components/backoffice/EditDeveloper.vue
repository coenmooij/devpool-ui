<template>
  <div class="w-100">
    <router-link
      :to="{ name: 'SingleDeveloper' }"
      class="navigation-back">
      <i class="fa fa-arrow-left"/> Back
    </router-link>
    <div v-if="loaded">
      <app-user-form
        :user="{
          id: id,
          first_name: developer.first_name,
          last_name: developer.last_name,
          nickname: developer.nickname,
          show_nickname: developer.show_nickname
      }" />
    </div>
    <app-loading-animation v-else />
  </div>
</template>

<script>
import LoadingAnimation from "../layout/LoadingAnimation";
import UserForm from "./UserForm";

export default {
  components: {
    "app-loading-animation": LoadingAnimation,
    "app-user-form": UserForm
  },
  data() {
    return {
      developer: Object,
      loaded: false
    };
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },
  created() {
    this.getAndLoadDeveloper(this.id);
  },
  methods: {
    getValue(value) {
      return value === null || value === undefined ? "" : value;
    },
    getAndLoadDeveloper(id) {
      this.$http
        .get("developers/" + id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.developer = data.data.developer;
          this.loaded = true;
        });
    }
  }
};
</script>

<style scoped>
input {
  background-color: white !important;
}

.forms {
  background-color: white;
  padding: 1rem;
  border: 1px solid #eee;
}
</style>
