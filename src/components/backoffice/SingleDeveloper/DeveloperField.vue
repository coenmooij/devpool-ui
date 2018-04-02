<template>
  <div class="developer-field">
    <span class="developer-field-title">
      {{ title|capitalize }}:
    </span>
    <br v-if="isArray">
    <span class="developer-field-value">
      {{ formattedValue }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number, Array],
      required: true
    }
  },
  computed: {
    formattedValue() {
      if (this.value !== undefined) {
        if (typeof this.value === "string" || typeof this.value === "number") {
          return this.value;
        } else if (Array.isArray(this.value)) {
          return this.value.join(", ");
        }
      }
      return "";
    },
    isArray() {
      return this.value.constructor.name === "Array";
    }
  }
};
</script>

<style scoped>
.developer-field-title {
  font-weight: bold;
}
.developer-field {
  margin: 0.5rem 0;
}
</style>


