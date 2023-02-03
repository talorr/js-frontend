<template>
    <div class="main">
        <ModalHome v-if="showModal" :posts="posts" :key="postId" :postId="postId">
        </ModalHome>
      <div class="home">
        <!-- {{ postId }}
        {{ showModal }}
        {{ posts }} -->
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
            <img @mouseenter="postId=index+1;triggerMouseEnter()" @mouseleave="triggerMouseOver()" src="../assets/img/pic.jpeg" alt="">
            <div class="title-card">
              <p>{{post.name}}</p>
              <p>{{post.studio}}</p>
            </div>
          </div>
        </div>

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
        triggerMouseEnter() {
            setTimeout(() => { this.showModal = true; }, 20);
        },
        triggerMouseOver() {
            setTimeout(() => { this.showModal = false; }, 500);
        },
        openOverlay() {
            $("#overlay")
                .off()
                .animate({}, 50);
        }
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

.title-list{
  width: 200px;
}
.title-list img{
  width: 200px;
  border-radius: 5px;
  margin-bottom: 8px;
}
.title-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title-card p {
  margin: 2px 0 !important;
  text-align: left;
}
.title-card p:nth-child(2){
  color: #828282;
  
  font-size: 15px;
}


.main{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container {

  margin-top:40px;
  display: flex;
  justify-content: space-evenly;

}
button {
  width: 100px;
  height: 35px;
  margin: 5px;
  border-radius: 10px;
}
i {
  margin: 4px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form input {
  padding-left: 8px;
  width: 200px;
  height: 30px;
  margin: 5px;
  border-radius: 40px;
  box-shadow: none;
  border: 0.5px solid rgb(207, 207, 207);
  outline: none;
}
</style>
