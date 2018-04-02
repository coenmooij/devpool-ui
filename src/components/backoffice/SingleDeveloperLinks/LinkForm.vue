<template>
  <div class="link-form">
    <h5>Add a link</h5>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label 
          for="type" 
          class="input-group-text">Type</label>  
      </div>
      <select 
        id="type"
        v-model="type"
        class="custom-select"
        name="type" >
        <option 
          v-for="option in typeOptions" 
          :key="option.value" 
          :value="option.value">
          {{ option.label }}
        </option>
      </select>  
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <label 
          for="type" 
          class="input-group-text">Value</label>  
      </div>
      <input
        v-model="value"
        type="text"
        class="form-control">
      
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
</template>

<script>
export default {
  data() {
    return {
      type: null,
      value: null,
      saved: false,
      typeOptions: [
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "website", icon: "chrome", label: "Website" },
        { value: "avatar", icon: "user", label: "Avatar" },
        { value: "facebook", label: "Facebook" },
        { value: "github", label: "GitHub" },
        { value: "bitbucket", label: "BitBucket" },
        { value: "twitter", label: "Twitter" },
        { value: "gitlab", label: "GitLab" }
      ]
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      this.$http
        .post("developers/" + this.id + "/links", {
          type: this.type,
          value: this.value
        })
        .then(() => {
          this.saved = true;
          this.$emit("submit");
        });
    }
  }
};
</script>

<style scoped>
.link-form {
  padding-bottom: 1rem;
}

.action-bar {
  text-align: right;
  margin: 1rem 0;
}

.link-form .input-group-prepend label {
  width: 5rem;
}

input {
  background-color: white;
}
</style>
