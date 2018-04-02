<template>
  <div class="question">
    <h6>{{ question.value }}</h6>
    <p 
      v-for="answer in question.answers" 
      :key="answer.id">
      {{ answer.value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.question h6 {
  font-weight: bold;
}
</style>


