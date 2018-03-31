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
        <div class="form-group">
          <label for="country">Country</label>
          <input 
            id="country"
            v-model="country"            
            type="text" 
            class="form-control"
            @input="change">
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input 
            id="phone"
            v-model="phone"            
            type="text" 
            class="form-control"
            @input="change">
        </div>
        <div class="form-check">
          <input 
            id="priority"
            v-model="priority"
            type="checkbox" 
            class="form-check-input"
            @click="change">
          <label for="priority">Developer has priority</label>
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
      salary: null,
      country: null,
      phone: null,
      priority: null
    };
  },
  computed: {
    updatedFields() {
      return {
        salary: this.salary,
        country: this.country,
        phone: this.phone,
        priority: this.priority
      };
    }
  },
  created() {
    this.id = this.developer.id;
    this.salary = this.developer.salary ? this.developer.salary : "";
    this.country = this.developer.country ? this.developer.country : "";
    this.phone = this.developer.phone ? this.developer.phone : "";
    this.priority = this.developer.priority;
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
