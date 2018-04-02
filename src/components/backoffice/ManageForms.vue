<template>
  <div class="w-100">
    <router-link
      :to="{ name: 'SingleDeveloper' }"
      class="navigation-back">
      <i class="fa fa-arrow-left"/> Back
    </router-link>
    <h2 class="mb-3">
      Manage Forms
      <button 
        class="pull-right btn btn-dark"
        @click="showAddFormForm = true">
        <i class="fa fa-plus"/> Add Form
      </button>
    </h2>
    <app-add-form 
      v-if="showAddFormForm"
      @cancel="showAddFormForm = false"
      @submit="reloadForms"/>
    <div 
      v-if="loaded" 
      class="forms">
      <app-form 
        v-for="form in forms" 
        :form="form"
        :key="form.id"/>
    </div>
    <app-loading-animation v-else />
  </div>
</template>

<script>
import LoadingAnimation from "../layout/LoadingAnimation";
import Form from "./Form";
import FormForm from "./FormForm";

export default {
  components: {
    "app-loading-animation": LoadingAnimation,
    "app-form": Form,
    "app-add-form": FormForm
  },
  data() {
    return {
      loaded: false,
      showAddFormForm: false,
      forms: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getForms();
  },
  methods: {
    reloadForms() {
      this.showAddFormForm = false;
      this.loaded = false;
      this.getForms();
    },
    getForms() {
      this.$http
        .get("developers/" + this.id + "/forms")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.forms = data.data.forms;
          this.loaded = true;
        });
    }
  }
};
</script>
