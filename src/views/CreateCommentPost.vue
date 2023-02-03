<template>
    <div>
        <form @submit.prevent="CreateComments()">
            <input type="text" v-model="name_comment" placeholder="Введите название">
            <input type="text" v-model="body" placeholder="Введите комментарий">
            <button type="submit">Оставить комментарий</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import createComment from '@/services/PostService'

export default {
  name: "CreateCommentPost",
  components: {createComment},
  data() {
    return {
        body: '',
        created_at: undefined,
        id: undefined,
        product_id: undefined,
        name_comment: '',
        updated_at: undefined,
        user_id: undefined,
        msg: ''
    }
  },
  methods:{
    async CreateComments() {
      await axios.post('http://localhost/laravel/public/api/posts/'+ this.$route.params.id +'/comment',
        {
          name_comment: this.name_comment,
          body: this.body,
        })
        .then(response =>response.data);
    }
  },
}

</script>

<style>
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
  height: 40px;
  margin: 5px;
  border-radius: 10px;
}
</style>