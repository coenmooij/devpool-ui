<template>
  <div class="card">
    <div 
      :class="[ developer.priority ? 'bg-success': 'bg-dark' ]"
      class="card-header text-white"
    >
      <i 
        v-if="developer.priority" 
        class="fa fa-arrow-up" /> {{ developer.display_name }} ({{ developer.id }})
    </div>
    <div class="card-body">
      <p class="card-text">
        <span class="info-block">
          Seniority: {{ developer.seniority ? developer.seniority :'-' }}<br>
          Speciality: {{ developer.speciality ? developer.speciality :'-' }}<br>
          Technologies: <span 
            v-for="technology in developer.technologies" 
            :key="technology.id">{{ technology.name }} </span><br>
        </span>
        <span class="info-block">
          Status: {{ developer.pipeline_status }}<br>
          Salary: {{ developer.salary ? developer.salary : '-' }}<br>
        </span>
      </p>
    </div>
    <div class="card-footer"><span class="contact-info"><i class="fa fa-envelope"/>&nbsp; {{ developer.email }}</span>&nbsp;&nbsp; <span class="contact-info"><i class="fa fa-phone"/>&nbsp; {{ developer.phone ? developer.phone :'-' }}</span></div>
  </div>
</template>

<script>
export default {
  props: { developer: Object }
};
</script>

<style scoped>
.card {
  width: 100%;
  margin: 1rem 0;
}
.info-block {
  display: block;
  float: left;
  margin-left: 10px;
}

.contact-info {
  display: inline-block;
}
.card-text {
  display: inline-block;
}

img {
  width: 100px;
  height: 100px;
  float: left;
  margin-right: 1rem;
}
</style>
