<template>
  <div class="question-and-answer w-100">
    <span class="question">
      {{ answer.question.value }}
    </span>
    <br>
    <span class="answer">
      {{ answer.value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.question-and-answer {
  margin: 1rem 0;
}
.question {
  font-weight: bold;
}
</style>

