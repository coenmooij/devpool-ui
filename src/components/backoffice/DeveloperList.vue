<template>
  <div class="w-100">
    <h2>Our Developers</h2>
    <p>Search: <input 
      v-model="search" 
      type="text" ></p>
    <div>
      <app-developer
        v-for="developer in developers"
        :key="developer.id"
        :developer="developer"/>
      </app-developer>
    </div>
  </div>
</template>

<script>
import Developer from "./Developer";

export default {
  components: {
    "app-developer": Developer
  },
  data() {
    return {
      developers: [],
      search: ""
    };
  },
  created() {
    this.getDevelopers();
  },
  methods: {
    getDevelopers() {
      this.$http
        .get("developers")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.developers = data.data.developers;
        });
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 1rem 2rem;
}
</style>
