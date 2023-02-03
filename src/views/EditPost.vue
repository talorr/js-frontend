<template>
    <div>
        <h2>Редактирование новости</h2>
        <form @submit.prevent="EditPosts()">
          <input type="text" v-model="name" placeholder="Введите название тайтла">
          <input type="text" v-model="studio" placeholder="Введите студию">
          <input type="text" v-model="genre" placeholder="Введите жанр">
          <input type="text" v-model="count" placeholder="Введите сколько серий вышло">
          <input type="text" v-model="ongoing" placeholder="Онгоинг">
          <input type="text" v-model="rating" placeholder="Введите рейтинг">
          <input type="text" v-model="release" placeholder="Введите дату выхода">
          <input type="text" v-model="img" placeholder="Введите ">
          <input class="description" type="text" v-model="description" placeholder="Введите описание">
          <button type="submit">Изменить новость</button>
        </form>
    </div>
</template>

<script>
import PostService from '@/services/PostService';
import axios from 'axios';


export default {
  name: "EditPost",
 data() {
    return {
        id: null,
        name: '',
        studio: '',
        genre: '',
        count: '',
        ongoing: '',
        rating: '',
        release: '',
        image: '',
        description: ''
    }
 },
 methods: {
  async EditPosts() {
    await axios.put('http://127.0.0.1:8000/api/posts/update/'+ this.$route.params.id,
      {
        name: this.name,
        description: this.description
      })
      .then(response =>response.data)
      this.$router.push('/');
      
    }
  }
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
  width: 150px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
}
.description {
    height: 60px;
}
</style>