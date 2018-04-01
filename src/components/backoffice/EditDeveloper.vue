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
      <app-developer-form 
        :developer="{
          id: id,
          speciality: developer.speciality,
          seniority: developer.seniority,
          pipeline_status: developer.pipeline_status,
          salary: developer.salary,
          country: developer.country,
          phone: developer.phone,
          birth_date: developer.birth_date,
          priority: developer.priority
      }"/>
      <app-technology-form />
    </div>
    <app-loading-animation v-else />
  </div>
</template>

<script>
import LoadingAnimation from "../layout/LoadingAnimation";
import UserForm from "./UserForm";
import DeveloperForm from "./DeveloperForm";
import TechnologyForm from "./TechnologyForm";

export default {
  components: {
    "app-loading-animation": LoadingAnimation,
    "app-user-form": UserForm,
    "app-developer-form": DeveloperForm,
    "app-technology-form": TechnologyForm
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
.card {
  margin-bottom: 2rem;
}
</style>
