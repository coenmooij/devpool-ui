<template>
  <div class="w-100">
    <router-link
      :to="{ name: 'DeveloperList' }"
      class="navigation-back">
      <i class="fa fa-arrow-left"/> Back
    </router-link>
    <div 
      v-if="typeof developer.id === 'number'"
      class="info">
      <div class="pull-left">
        <h1>
          {{ developer.display_name }}
          <router-link
            :to="{ name: 'EditDeveloper' }"
            class="edit-link">
            <i class="fa fa-edit"/>
          </router-link>
        </h1>
        <app-developer-field v-bind="{ title: 'id', value: getValue(developer.id) }" />
        <app-developer-field v-bind="{ title: 'name', value: getValue(developer.full_name) }" />
        <app-developer-field v-bind="{ title: 'nickname', value: getValue(developer.nickname) }" />
        <app-developer-field v-bind="{ title: 'speciality', value: getValue(developer.speciality) }" />
        <app-developer-field v-bind="{ title: 'seniority', value: getValue(developer.seniority) }" />
        <app-developer-field v-bind="{ title: 'pipeline status', value: getValue(developer.pipeline_status) }" />
        <app-developer-field v-bind="{ title: 'salary', value: getValue(developer.salary) }" />
        <app-developer-field v-bind="{ title: 'country', value: getValue(developer.country) }" />
        <app-developer-field v-bind="{ title: 'email', value: getValue(developer.email) }" />
        <app-developer-field v-bind="{ title: 'phone', value: getValue(developer.phone) }" />
        <app-developer-field v-bind="{ title: 'birth date', value: birthDate }" />
        <app-developer-field v-bind="{ title: 'has priority', value: getValue(developer.priority === 1 ? 'yes': 'no') }" />
        <app-developer-field v-bind="{ title: 'account created', value: createdAt }" />
        <app-developer-field v-bind="{ title: 'account updated', value: updatedAt }" />
        <app-developer-field v-bind="{ title: 'technologies', value: getTechnologies }" />
      </div>
      <div class="pull-right">
        <img 
          :src="avatar" 
          alt="avatar"
          width="250px"
          height="250px">
        <br>
        <br>
        <h3>Links</h3>
        <hr>
        <div
          v-for="link in developer.links"
          :key="link.id">
          <app-link :link="link"/>
        </div>
      </div>
      <div class="clearfix"/>
      <div 
        v-if="hasForm"
        class="forms">
        <hr>
        <h3>Form Answers</h3>
        <app-answer
          v-for="answer in developer.answers"
          :key="answer.id"
          :answer="answer" />
      </div>
      <div 
        v-if="hasComments"
        class="comments">
        <hr>
        <h3>Comments</h3>
        <app-comment 
          v-for="comment in developer.comments" 
          :key="comment.id" 
          :comment="comment"/>
      </div>
    </div>
    <app-loading-animation v-else />
  </div>
</template>

<script>
import DeveloperField from "./DeveloperField";
import LoadingAnimation from "../layout/LoadingAnimation";
import Comment from "./Comment";
import Link from "./Link";
import Answer from "./Answer";
import Vue from "vue";

export default {
  components: {
    "app-developer-field": DeveloperField,
    "app-loading-animation": LoadingAnimation,
    "app-link": Link,
    "app-comment": Comment,
    "app-answer": Answer
  },
  data() {
    return {
      developer: Object,
      loaded: false
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    createdAt() {
      return Vue.filter("formatDateTime")(
        this.getValue(this.developer.created_at)
      );
    },
    updatedAt() {
      return Vue.filter("formatDateTime")(
        this.getValue(this.developer.updated_at)
      );
    },
    birthDate() {
      return Vue.filter("formatDate")(this.getValue(this.developer.birth_date));
    },
    getTechnologies() {
      if (this.getValue(this.developer.technologies) === "-") {
        return "-";
      }
      let map = this.developer.technologies.map(technology => {
        return technology.name;
      });
      return map;
    },
    hasForm() {
      return this.loaded && this.developer.answers.length > 0;
    },
    hasComments() {
      return this.loaded && this.developer.comments.length > 0;
    },
    avatar() {
      const placeholder = "/static/profile-placeholder.png";
      if (this.developer.links.length > 0) {
        let x = 0;
        for (x in this.developer.links) {
          if (this.developer.links[x].type === "avatar") {
            return this.developer.links[x].value;
          }
        }
      }
      return placeholder;
    }
  },
  created() {
    this.getAndLoadDeveloper(this.id);
  },
  methods: {
    getValue(value) {
      return value === null || value === undefined ? "-" : value;
    },
    getAndLoadDeveloper(id) {
      this.$http
        .get("developers/" + id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.developer = data.data.developer;
          this.loaded = true;
        });
    }
  }
};
</script>

<style>
.edit-link {
  margin-left: 1rem;
  font-size: 0.6em;
}
</style>
