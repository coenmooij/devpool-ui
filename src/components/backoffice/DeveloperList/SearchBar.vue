<template>
  <form 
    class="search-bar input-group"
    @submit.prevent="search">
    <input 
      v-model="searchQuery"
      name="searchQuery"
      type="text"
      class="form-control"
      placeholder="Search..."
      @keyup="search">
    <span class="input-group-btn">
      <button 
        type="submit" 
        class="btn btn-dark text-white" 
        @click.prevent="search">
        <i class="fa fa-search"/>
      </button>
    </span>
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      if (this.searchQuery.length > 2 || this.searchQuery.length === 0) {
        this.$emit("search", this.searchQuery);
      }
    }
  }
};
</script>


<style>
.search-bar {
  margin: 1.5rem 0;
}

.search-bar input {
  background-color: white;
}

.search-bar .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
