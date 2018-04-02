<template>
  <div class="card">
    <h4 class="card-header">Add a comment</h4>
    <div class="card-body">
      <div class="form-group">
        <label for="comment">
          Message
        </label>
        <textarea 
          id="comment"
          v-model="message"
          name="comment"
          class="form-control" />
      </div>
      <div class="action-bar">
        <button
          v-if="!saved"
          class="btn btn-danger"
          @click.prevent="cancel">
          <i class="fa fa-remove"/> Cancel
        </button>
        <button
          v-if="saved"
          class="btn btn-success"
          disabled>
          <i class="fa fa-check"/> Submitted
        </button>
        <button
          v-else
          class="btn btn-success"
          @click.prevent="submit">
          <i class="fa fa-arrow-right"/> Submit
        </button>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      message: null,
      saved: false
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      this.$http
        .post("developers/" + this.id + "/comments", {
          message: this.message
        })
        .then(response => response.json())
        .then(() => {
          this.saved = true;
          this.$emit("saved");
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>


<style scoped>
.card {
  margin-top: 1rem;
}
.action-bar {
  text-align: right;
}
</style>
