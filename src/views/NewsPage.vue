<template>
  <div class="Posts">
    <h3>{{post.name}}</h3>
    <span>{{post.description}}</span>
    <h4>Комментарии:</h4>
    <CommentPost />
  </div>
</template>

<script>
import axios from "axios";
import CommentPost from "@/views/CommentPost";

export default {
  name: "NewsPage",
  components: {CommentPost},
  data() {
    return {
      post: {
        id: undefined,
        name: undefined,
        studio: undefined,
        genre: undefined,
        count: undefined,
        ongoing:undefined,
        rating: undefined,
        release: undefined,
        image: undefined,
        description:undefined 
      },


    };
  },
  async mounted() {
    await axios.get(`http://localhost/laravel/public/api/posts/${this.$route.params.id}`)
        .then(response => (this.post = response.data, console.log(response)));
  }
}
</script>

<style scoped>
.Posts {
  display: flex;
  flex-direction: column;
}
</style>