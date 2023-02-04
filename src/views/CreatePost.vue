<template>
    <div>
        <h2>Создание новости</h2>
        <form @submit.prevent="createPosts()">
            <input type="text" v-model="name" placeholder="Введите название новости">
            <input type="text" v-model="studio" placeholder="Введите название новости">
            <input type="text" v-model="genre" placeholder="Введите название новости">
            <input type="text" v-model="count" placeholder="Введите название новости">
            <input type="text" v-model="ongoing" placeholder="Введите название новости">
            <input type="text" v-model="rating" placeholder="Введите название новости">
            <input type="text" v-model="release" placeholder="Введите название новости">
            <input type="text" v-model="image" placeholder="Тут должна быть картинка">
            <input type="text" v-model="description" placeholder="Введите новость"
                   class="description">
            <button type="submit">Создать новость</button>
        </form>
    </div>
</template>

<script>
import PostService from '@/services/PostService';
import axios from 'axios';


export default {
  name: "CreatePost",
  components: {PostService},
 data() {
    return {
        id: null,
        name: 'One Piece',
        studio:'Toei Animation',
        genre: 'action',
        count: '9',
        ongoing:'1',
        rating:'4.57',
        release:'22.01.24',
        image:'',
        description: 'dsaiug'
    }
 },
 methods: {
  async createPosts(id) {
    await axios.post('http://localhost/laravel/public/api/posts/create',
      {
        name: this.name,
        studio: this.studio,
        genre: this.genre,
        count: this.count,
        ongoing: this.ongoing,
        rating: this.rating,
        release: this.release,
        image:this.image,
        description: this.description
      })
      .then(response =>response.data)
      this.$router.push('/');
      
    }
  }
}
</script>

<style scoped>
h2{
  margin-left: 0;
  font-weight: 400;
  }
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form input {
  width: 200px;
  height: 30px;
  margin: 5px;
  box-shadow: none;
  outline: none;
  font-weight: 200;
  padding: 2px 5px;
  border: 1px solid rgba(0, 0, 0, 0.234);
  border-radius: 8px;
}
form button {
  width: 150px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
}

</style>