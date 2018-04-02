<template>
  <div class="card">
    <h4 class="card-header">Form: {{ form.name }}</h4>
    <div class="card-body">
      <app-question 
        v-for="question in form.questions"
        :question="question"
        :key="question.id"/>
    </div>
  </div>
  
</template>

<script>
import Question from "./Question";

export default {
  components: {
    "app-question": Question
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
}
</style>
