<template>
  <div class="form-group">
    <label :for="'question'+ question.id">
      {{ question.value }}
    </label>
    <input 
      v-model="answer"
      type="text"
      class="form-control">
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      answer: this.value
    };
  },
  watch: {
    answer(value) {
      this.$emit("input", value);
    }
  }
};
</script>
