<template>
  <div>
    <app-header/>
    <div class="container">
      <div class="row">
        <router-view/>
      </div>
    </div>
    <div class="clearfix"><br></div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style scoped>
.container {
  padding: 1rem !important;
}
</style>
