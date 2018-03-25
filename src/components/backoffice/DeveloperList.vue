<template>
  <div class="w-100">
    <app-search-bar @search="search"/>
    <hr>
    <div>
      <p v-if="searchQuery !== ''">Displaying results for: {{ searchQuery }}</p>
      <app-loading-animation v-if="!loaded"/>
      <app-developer
        v-for="developer in filteredDevelopers"
        :key="developer.id"
        :developer="developer"/>
    </div>
  </div>
</template>

<script>
import Developer from "./Developer";
import SearchBar from "./SearchBar";
import LoadingAnimation from "../layout/LoadingAnimation";

export default {
  components: {
    "app-developer": Developer,
    "app-search-bar": SearchBar,
    "app-loading-animation": LoadingAnimation
  },
  data() {
    return {
      developers: [],
      searchQuery: "",
      loaded: false
    };
  },
  computed: {
    filteredDevelopers() {
      return this.developers.filter(developer => {
        return (
          this.foundInValue(developer.seniority) ||
          this.foundInValue(developer.speciality) ||
          this.foundInValue(developer.full_name) ||
          this.foundInValue(developer.id.toString()) ||
          this.foundInValue(developer.pipeline_status) ||
          this.foundInValue(developer.email) ||
          this.foundInValue(developer.phone) ||
          this.foundInTechnologies(developer.technologies)
        );
      });
    }
  },
  created() {
    this.getDevelopers();
  },
  methods: {
    foundInTechnologies(technologies) {
      let item;
      for (item in technologies) {
        if (this.foundInValue(technologies[item].name)) {
          return true;
        }
      }
      return false;
    },
    foundInValue(value) {
      if (value === undefined || value === null) {
        return false;
      }
      return value.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
    },
    getDevelopers() {
      this.$http
        .get("developers")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.developers = data.data.developers;
          this.loaded = true;
        });
    },
    search(searchQuery) {
      this.searchQuery = searchQuery;
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 1rem 2rem;
}
</style>
