<template>
    <div class="card">
        <div class="card-header text-white bg-dark">
            {{ developer.firstName }} {{ developer.lastName }} - {{ developer.seniority|capitalize }} {{ developer.specialisation|capitalize }} Developer
        </div>
        <div class="card-body">
            <img src="/static/profile-placeholder.png" alt="profile picture placeholder">
            <p class="card-text">
                Languages: <span v-for="language in developer.programmingLanguages">{{language}}</span><br/>
                Frameworks: <span v-for="framework in developer.frameworks">{{framework}}</span>
            </p>
        </div>
    </div>
</template>

<script>
  export default{
    props: {
      firstName: String,
      developer: {
        id: Number,
        firstName: String,
        lastName: String,
        specialisation: String,
        currentSalary: Number,
        seniority: String,
        programmingLanguages: Array,
        frameworks: Array,
        status: String,
      },
    },

  };
</script>

<style scoped>
    .card {
        margin: 1rem 2rem;
    }

    img {
        width:100px;
        height:100px;
        float:left;
        margin-right:1rem;

    }
</style>
