<template>
  <div class="card">
    <h5 class="card-header">Manage Technologies
      <button 
        class="pull-right btn btn-sm btn-dark"
        @click="showAddTechnologyForm = true">
        <i class="fa fa-plus"/> Add Technology
      </button>
    </h5>
    <div class="card-body">
      <div 
        v-if="showAddTechnologyForm"
        class="add-technology-form">
        <h5>Add a technology</h5>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label 
              for="type" 
              class="input-group-text">Select Technology
            </label>  
          </div>
          <select 
            id="technology"
            v-model="technologyId"
            class="custom-select"
            name="technology" >
            <option 
              v-for="option in technologies" 
              :key="option.id" 
              :value="option.id">
              {{ option.name }}
            </option>
          </select>  
        </div>
        <div class="action-bar">
          <button 
            v-if="!adding"
            class="btn btn-danger"
            @click="showAddTechnologyForm = false">
            <i class="fa fa-remove" /> Cancel
          </button>
          <button
            v-if="adding"
            class="btn btn-success"
            disabled>
            <i class="fa fa-check" /> Added to developer
          </button>
          <button
            v-else
            class="btn btn-success"
            @click="add">
            <i class="fa fa-plus" /> Add to developer
          </button>
          <hr>
        </div>
      </div>
      <div 
        v-if="loaded"
        class="list-group">
        <span 
          v-for="technology in developerTechnologies" 
          :key="technology.id"
          class="list-group-item">
          {{ technology.name }} 
          <i 
            class="fa fa-remove pull-right" 
            @click="remove(technology.id)"/>
        </span>
      </div>
      <app-loading-animation v-else />
    </div>
  </div>
</template>

<script>
import LoadingAnimation from "../layout/LoadingAnimation";

export default {
  components: {
    "app-loading-animation": LoadingAnimation
  },
  data() {
    return {
      loaded: false,
      adding: false,
      technologyId: null,
      showAddTechnologyForm: false,
      technologies: [],
      developerTechnologies: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getAllTechnologies();
    this.getDeveloperTechnologies();
  },
  methods: {
    add() {
      this.adding = true;
      this.$http
        .post("developers/" + this.id + "/technologies", {
          technology_id_list: [this.technologyId]
        })
        .then(() => {
          this.adding = false;
          this.loaded = false;
          this.getDeveloperTechnologies();
        })
        .catch(() => {
          this.adding = false;
        });
    },
    getAllTechnologies() {
      this.$http
        .get("technologies")
        .then(response => response.json())
        .then(data => {
          this.technologies = data.data.technologies;
        });
    },
    getDeveloperTechnologies() {
      this.$http
        .get("developers/" + this.id + "/technologies")
        .then(response => response.json())
        .then(data => {
          this.developerTechnologies = data.data.technologies;
          this.loaded = true;
        });
    },
    remove(id) {
      this.$http
        .delete("developers/" + this.id + "/technologies", {
          body: { technology_id_list: [id] }
        })
        .then(() => {
          this.loaded = false;
          this.getDeveloperTechnologies();
        });
    }
  }
};
</script>


<style scoped>
.list-group-item i {
  font-size: 1.5em;
  color: red;
}
.list-group-item i:hover {
  cursor: pointer;
}
.action-bar {
  margin-bottom: 1rem;
  text-align: right;
}
</style>
