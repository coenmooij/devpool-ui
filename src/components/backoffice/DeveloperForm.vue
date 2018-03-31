<template>
  <div class="card">
    <h5 class="card-header">
      Developer Settings
    </h5>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="speciality">Speciality</label>
          <select 
            id="speciality"
            v-model="speciality"            
            type="text" 
            class="form-control"
            @input="change">
            <option 
              v-for="speciality in specialityOptions"
              :key="speciality.value"
              :value="speciality.value">{{ speciality.label }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="seniority">Seniority</label>
          <select 
            id="seniority"
            v-model="seniority"            
            type="text" 
            class="form-control"
            @input="change">
            <option 
              v-for="seniority in seniorityOptions"
              :key="seniority.value"
              :value="seniority.value">{{ seniority.label }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="pipelineStatus">Pipeline Status</label>
          <select 
            id="pipelineStatus"
            v-model="pipelineStatus"            
            type="text" 
            class="form-control"
            @input="change">
            <option 
              v-for="status in pipelineStatusOptions"
              :key="status.value"
              :value="status.value">{{ status.label }}</option>
          </select>
        </div>
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
      saved: true,
      salary: null,
      country: null,
      phone: null,
      priority: null,
      speciality: null,
      seniority: null,
      pipelineStatus: null,
      specialityOptions: [
        { label: "Front-end", value: "front-end" },
        { label: "Back-end", value: "back-end" },
        { label: "Fullstack", value: "fullstack" },
        { label: "DevOps", value: "devops" },
        { label: "Mobile", value: "mobile" }
      ],
      seniorityOptions: [
        { label: "Trainee", value: "trainee" },
        { label: "Junior", value: "junior" },
        { label: "Junior/Medior", value: "junior/medior" },
        { label: "Medior", value: "medior" },
        { label: "Medior/Senior", value: "medior/senior" },
        { label: "Senior", value: "senior" },
        { label: "Senior/Lead", value: "senior/lead" },
        { label: "Lead", value: "lead" },
        { label: "Senior/Architect", value: "senior/architect" },
        { label: "Architect", value: "architect" }
      ],
      pipelineStatusOptions: [
        { label: "Prospect", value: "prospect" },
        { label: "Profile incomplete", value: "profile incomplete" },
        { label: "Profile review", value: "profile review" },
        { label: "Technical Interview", value: "technical interview" },
        { label: "Caspar", value: "caspar" },
        { label: "Icebox", value: "icebox" },
        { label: "Blacklist", value: "blacklist" }
      ]
    };
  },
  computed: {
    updatedFields() {
      return {
        salary: this.salary,
        country: this.country,
        phone: this.phone,
        priority: this.priority,
        speciality: this.speciality,
        seniority: this.seniority,
        pipeline_status: this.pipelineStatus
      };
    }
  },
  created() {
    this.id = this.developer.id;
    this.salary = this.developer.salary ? this.developer.salary : "";
    this.country = this.developer.country ? this.developer.country : "";
    this.phone = this.developer.phone ? this.developer.phone : "";
    this.priority = this.developer.priority;
    this.speciality = this.developer.speciality;
    this.seniority = this.developer.seniority;
    this.pipelineStatus = this.developer.pipeline_status;
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
