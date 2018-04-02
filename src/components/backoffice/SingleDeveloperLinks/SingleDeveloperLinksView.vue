<template>
  <div class="w-100">
    <router-link
      :to="{ name: 'SingleDeveloper' }"
      class="navigation-back">
      <i class="fa fa-arrow-left"/> Back
    </router-link>
    <div class="card">
      <h4 class="card-header">
        Manage Links
        <button 
          class="pull-right btn btn-sm btn-dark"
          @click="showAddLinkForm = true">
          <i class="fa fa-plus"/> Add Link
        </button>
      </h4>
      <div class="card-body">  
        <app-link-form 
          v-if="showAddLinkForm"
          @cancel="showAddLinkForm = false"
          @submit="newLink"/>
        <div 
          v-if="loaded" 
          class="links">
          <table class="table">
            <tbody>
              <app-manage-link 
                v-for="link in links" 
                :link="link"
                :key="link.id"
                @changed="reloadLinks"/>
            </tbody>
          </table>
        </div>
        <app-loading-animation v-else />
      </div>
    </div>
  </div>
</template>

<script>
import LoadingAnimation from "../../layout/LoadingAnimation";
import ManageLink from "./ManageLink";
import LinkForm from "./LinkForm";

export default {
  components: {
    "app-loading-animation": LoadingAnimation,
    "app-manage-link": ManageLink,
    "app-link-form": LinkForm
  },
  data() {
    return {
      loaded: false,
      showAddLinkForm: false,
      links: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getLinks();
  },
  methods: {
    newLink() {
      this.showAddLinkForm = false;
      this.reloadLinks();
    },
    reloadLinks() {
      this.loaded = false;
      this.getLinks();
    },
    getLinks() {
      this.$http
        .get("developers/" + this.id + "/links")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.links = data.data.links;
          this.loaded = true;
        });
    }
  }
};
</script>
