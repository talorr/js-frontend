<template>
    <div class="main">
      <div class="home">
        <form @submit.prevent="Search()">
            <input type="text" v-model="posts.name" placeholder="Введите название тайтла" @submit.enter="Search()">
        </form>
        <div class="CreatePost">
          <router-link to="/create_post"><h3>Создать страницу тайтла</h3></router-link>
        </div>
      </div>
        <div class="container">
          <div v-for="(post,index) in posts" :key="posts.indexOf(post)" class="container-card">
          <div @click="goTo(post.id)"  class="title-list">
              <div class="icon">              
                <!-- <i @click="edit(post.id)" class="gg-pen"></i>   -->
                <i @click="deletePost(post.id)" class="gg-trash"></i>
              </div>
            <div class="img_container">
              <img @mouseenter="postId=index+1;showModal=true" @mouseleave="showModal=false" src="../assets/img/pic.jpeg" alt="">
            </div>
            
            <div class="title-card">
              <p>{{post.name}}</p>
              <p>{{post.studio}}</p>
            </div>
          </div>
        </div>

      </div>
      <div class="modal">
        <transition name="fade">
      <ModalHome v-if="showModal" :posts="posts" :key="postId" :postId="postId">
      </ModalHome>
        </transition>
      </div>
  </div>
  
</template>

<script>
import ModalHome from '@/components/modalHome.vue';
import axios from 'axios'
export default {
    name: "Search",
    components: [{ModalHome}],
    data() {
        return {
            posts: [
                {
                    id: null,
                    name: null,
                    studio: null,
                    genre: null,
                    count: null,
                    ongoing: null,
                    rating: null,
                    release: null,
                    image: null,
                    description: null
                }
            ],
            showModal: false,
            postId: 0,
            search: "",
        };
    },
    methods: {
        async Search() {
            await axios.get("http://localhost/laravel/public/api/posts/search/" + this.posts.name, {
                name: this.posts.name
            })
                .then(response => (this.posts = response.data));
        },
        goTo(id) {
            this.$router.push({
                path: `/news_page/${id}`
            });
        },
        edit(id) {
            this.$router.push({
                path: `/edit/${id}`
            });
        },
        deletePost(id) {
            axios.delete("http://localhost/laravel/public/api/posts/delete/" + id).then(() => this.mounted);
        },
    },
    async mounted() {
        await axios.get("http://localhost/laravel/public/api/posts", {
            name: this.posts.name
        })
            .then(response => (this.posts = response.data));
    },
    components: { ModalHome }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 1s ease
}

.modal-enter, .modal-leave-to {
  opacity: 0
}
.title-list{
  width: 200px;

}
.img_container{
  border-radius: 5px;
  background-color: black;  width: 200px;
  margin-bottom: 8px;
}
.img_container img{
  background-color: black;  width: 200px;
  border-radius: 5px;

  cursor: pointer;
  opacity: 1;
  transition: opacity 124ms linear, transform 124ms linear;
}
.img_container img:hover{
  opacity: 0.8;
}
.title-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title-card p {
  margin: 2px 0 !important;
  text-align: left;
  cursor: pointer;
}
.title-card p:nth-child(2){
  color: #828282;
  font-size: 15px;
}


.main{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 70vw;
  margin-top:40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
button {
  width: 100px;
  height: 35px;
  margin: 5px;
  border-radius: 10px;
}
.icon {
  width: 200px;
  position: absolute;
  display: flex;
  justify-content: end;
  background-color: rgba(0,0,0,0);
  z-index: 200;
}
i {
  margin: 15px;
  cursor: pointer;
  color: white;

}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form input {
  padding-left: 8px;
  width: 600px;
  height: 30px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: none;
  border: 0.5px solid rgb(207, 207, 207);
  outline: none;
}
form input:focus{
  border: 1px solid rgb(147, 147, 147)
}
.CreatePost a{
  color: rgb(44, 116, 145);
  text-decoration: none;
}
.CreatePost a h3 {
  font-weight: 200;
  padding: 10px 20px;
  width: 200px !important;
  border: 1px solid rgba(0, 0, 0, 0.234);
  border-radius: 8px;
}
.CreatePost a h3:hover{
  background-color: rgb(239, 244, 249);
  border: 1px solid rgb(147, 147, 147)
}
.CreatePost a:hover {
  color: rgb(78, 148, 176);
}
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal{
  position: absolute;
  left: 1450px;
  top: 265px;
}
.fade-enter-active {
  transition: opacity 0.4s ease-in;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
