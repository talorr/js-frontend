<template>
  <div>
<!--    <h5>{{comment.body}}</h5>-->
      <h5 v-for="com in comments">
      Комментарий<br>{{ com.body }}
      </h5>
    <CreateCommentPost />
  </div>
</template>

<script>
import axios from "axios";
import CreateCommentPost from "@/views/CreateCommentPost";


export default {
  name: "CommentPost",
  components: {CreateCommentPost},
  data() {
    return {
      comments: {
      },


    }
  },
  // this.comment = response.data[0,1,2]
  async mounted() {
    await axios.get(`http://localhost/laravel/public/api/posts/show/${this.$route.params.id}/comment`)
        .then(response => (
            this.comments = response.data
            ));
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form input {
  height: 30px;
  margin: 5px;
  border-radius: 10px;
}
form button {
  width: 100px;
  height: 35px;
  margin: 5px;
  border-radius: 10px;
}
</style>