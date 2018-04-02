<template>
  <div class="card">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formId: null,
      showQuestions: false,
      forms: []
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    select() {
      this.showQuestions = true;
    },
    submit() {
      this.showQuestions = false;
      this.formId = null;
      this.$emit("submit");
    }
  }
};
</script>


<style>
.action-bar {
  text-align: right;
}
</style>
