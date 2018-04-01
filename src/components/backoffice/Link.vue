<template>
  <div 
    v-if="link.type !== 'avatar'"
    class="link">
    <i 
      v-if="hasImage" 
      :class="getClass"
      class="type-logo"/> <span v-if="link.type !== 'website'">{{ link.type }}:</span> {{ link.value }}
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasImage() {
      const typesWithImage = [
        "facebook",
        "flickr",
        "github",
        "instagram",
        "twitter",
        "bitbucket",
        "linkedin",
        "youtube",
        "vimeo",
        "vk",
        "twitch",
        "gitlab",
        "website"
      ];
      return typesWithImage.includes(this.link.type);
    },
    getClass() {
      if (this.link.type === "website") {
        return "fa fa-chrome";
      }
      return "fa fa-" + this.link.type;
    }
  }
};
</script>

<style>
.link {
  padding: 0.3rem 0;
}

.type-logo {
  width: 30px;
  font-size: 1.3em;
}
</style>
