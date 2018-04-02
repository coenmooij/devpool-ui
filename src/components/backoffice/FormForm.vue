<template>
  <div
    v-if="formsLoaded" 
    class="card">
    <h4 class="card-header">Add form to developer</h4>
    <div class="card-body">
      <div 
        v-if="!showQuestions"
        class="form-group mb-3">
        <label for="form">Select a form</label>
        <select 
          id="form"
          v-model="formId"
          class="form-control"
          name="form" >
          <option 
            v-for="form in forms"
            :key="form.id" 
            :value="form.id">
            {{ form.name }}
          </option>
        </select>  
      </div>
      <div 
        v-if="showQuestions && questionsLoaded"
        class="mb-3">
        <app-question
          v-for="question in form.questions"
          :question="question"
          :key="question.id" />
      </div>
      <app-loading-animation v-if="showQuestions && !questionsLoaded" />
      <div class="action-bar">
        <button 
          class="btn btn-danger"
          @click="cancel">
          <i class="fa fa-remove" /> Cancel
        </button>
        <button
          v-if="!showQuestions"
          class="btn btn-success"
          @click="select">
          <i class="fa fa-plus" /> Add to developer
        </button>
        <button
          v-if="showQuestions"
          class="btn btn-success"
          @click="submit">
          <i class="fa fa-arrow-right" /> Submit form
        </button>
      </div>
    </div>
  </div>
  <app-loading-animation v-else />
</template>

<script>
import LoadingAnimation from "../layout/LoadingAnimation";
import FormQuestion from "./FormQuestion";

export default {
  components: {
    "app-loading-animation": LoadingAnimation,
    "app-question": FormQuestion
  },
  data() {
    return {
      formId: null,
      showQuestions: false,
      questionsLoaded: false,
      formsLoaded: false,
      forms: [],
      form: null,
      answers: []
    };
  },
  created() {
    this.getForms();
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    select() {
      this.getQuestions(this.formId);
      this.showQuestions = true;
    },
    submit() {
      this.showQuestions = false;
      this.formId = null;
      this.$emit("submit");
    },
    getQuestions(id) {
      this.$http
        .get("forms/developers/" + id)
        .then(response => response.json())
        .then(data => {
          this.form = data.data.form;
          this.questionsLoaded = true;
        });
    },
    getForms() {
      this.$http
        .get("forms/developers")
        .then(response => response.json())
        .then(data => {
          this.forms = data.data.forms;
          this.formId = this.forms[0].id;
          this.formsLoaded = true;
        });
    }
  }
};
</script>


<style>
.action-bar {
  text-align: right;
}
</style>
