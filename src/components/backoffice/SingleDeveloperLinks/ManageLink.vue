<template>
  <tr class="link">
    <td>
      <label :for="'link-value-' + link.id">
        {{ getLabel }}
      </label>
    </td>
    <td>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i :class="'fa fa-' + getIconClass"/> 
          </span>
        </div>
        <input 
          v-model="link.value"
          type="text"         
          class="form-control"
          @input="change" >
      </div>
      
    </td>
    <td>
      <button
        v-if="saved"
        class="btn btn-success"
        disabled>
        <i class="fa fa-check"/> Saved
      </button>
      <button
        v-else
        class="btn btn-success"
        @click="save">
        <i class="fa fa-refresh"/> Save
      </button>
    </td>
    <td>
      <button 
        class="btn btn-danger"  
        @click="remove">
        <i class="fa fa-remove"/> Remove
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      saved: true,
      types: [
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "website", icon: "chrome", label: "Website" },
        { value: "avatar", icon: "user", label: "Avatar" },
        { value: "facebook", label: "Facebook" },
        { value: "github", label: "GitHub" },
        { value: "bitbucket", label: "BitBucket" },
        { value: "twitter", label: "Twitter" },
        { value: "gitlab", label: "GitLab" }
      ]
    };
  },
  computed: {
    getLabel() {
      let x = 0;
      for (x in this.types) {
        if (this.types[x].value == this.link.type) {
          return this.types[x].label;
        }
      }
      return this.link.type;
    },
    getIconClass() {
      let x = 0;
      for (x in this.types) {
        if (this.types[x].value == this.link.type) {
          return this.types[x].icon ? this.types[x].icon : this.link.type;
        }
      }
      return this.link.type;
    }
  },
  methods: {
    change() {
      this.saved = false;
    },
    save() {
      this.$http
        .patch("links/" + this.link.id, {
          value: this.link.value
        })
        .then(response => response.json())
        .then(data => {
          this.link = data.data.link;
          this.saved = true;
        });
    },
    updateParent() {
      this.$emit("changed");
    },
    remove() {
      this.$http
        .delete("links/" + this.link.id)
        .then(response => response.json())
        .then(() => {
          this.updateParent();
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
.link .input-group-prepend span {
  width: 2.8rem;
  font-size: 1.2em;
}
.link .input-group-prepend span i {
  margin: 0 auto;
}
.link label {
  margin-top: 0.4rem;
}
</style>
