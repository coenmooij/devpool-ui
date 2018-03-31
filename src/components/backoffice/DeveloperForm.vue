<template>
  <div class="card">
    <h5 class="card-header">
      Developer Settings
    </h5>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="salary">Salary</label>
          <input 
            id="salary"
            v-model="salary"            
            type="text" 
            class="form-control"
            @input="change">
        </div>
        <div class="action-bar">
          <button
            v-if="saved"
            type="submit" 
            class="btn btn-success"
            disabled
            @click.prevent>
            <i class="fa fa-check"/> Saved
          </button>
          <button
            v-else
            type="submit" 
            class="btn btn-success"
            @click.prevent="save">
            <i class="fa fa-refresh"/> Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    developer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      saved: false,
      salary: null
    };
  },
  computed: {
    updatedFields() {
      return {
        salary: this.salary
      };
    }
  },
  created() {
    this.id = this.developer.id;
    this.salary = this.developer.salary ? this.developer.salary : "";
  },
  methods: {
    change() {
      this.saved = false;
    },
    save() {
      this.$http
        .patch("developers/" + this.id, this.updatedFields)
        .then(response => response.json())
        .then(() => {
          this.saved = true;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
.action-bar {
  text-align: right;
}
</style>
