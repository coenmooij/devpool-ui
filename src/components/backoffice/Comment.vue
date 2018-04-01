<template>
  <div class="comment">
    <table>
      <tr>
        <td>
          <div class="comment-image">
            <img 
              :src ="getAvatar" 
              alt="avatar">
          </div>
        </td>
        <td>
          <div class="comment-content">
            <span class="author">{{ comment.author.display_name }} wrote on {{ comment.created_at |formatDateTime }}</span>
            <hr>
            <p> 
              {{ comment.message }}
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div> 
</template>

<script>
export default {
  props: {
    comment: {
      required: true,
      type: Object
    }
  },
  computed: {
    getAvatar() {
      const placeholder = "/static/profile-placeholder.png";
      if (this.comment.author.links.length > 0) {
        let x = 0;
        for (x in this.comment.author.links) {
          if (this.comment.author.links[x].type === "avatar") {
            return this.comment.author.links[x].value;
          }
        }
      }
      return placeholder;
    }
  }
};
</script>

<style>
.comment {
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  border: 1px solid #ddd;
  display: block;
  background-color: white;
}

.author {
  margin-top: 0px;
}

.comment td {
  padding: 0;
}

.table {
  padding: 0;
}
.comment-image img {
  width: 100px;
  height: 100px;
}
.comment-content {
  vertical-align: top;
  padding: 0 1rem;
}

.comment-content hr {
  margin: 0.4rem;
  width: 100%;
}
</style>


