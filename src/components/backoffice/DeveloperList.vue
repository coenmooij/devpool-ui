<template>
    <div class="w-100">
        <h2>Our Developers</h2>
        <div>
            <app-developer
                    v-for="developer in developers"
                    :key="developer.id"
                    :developer="developer">
            </app-developer>
        </div>
    </div>
</template>

<script>
  import Developer from './Developer';

  export default {
    data(){
      return {
        developers: [],
      };
    },
    methods: {
      getDevelopers(){
        this.$http.get('developers').then(response => {
          return response.json();
        }).then(data => {
          this.developers = data;
        });
      },
    },
    components: {
      'app-developer': Developer,
    },
    created(){
      this.getDevelopers();
    }
  };
</script>

<style scoped>
    h2 {
        margin: 1rem 2rem;
    }
</style>
