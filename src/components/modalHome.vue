<template>
    <div>
        <div class="overlay">
        <div class="card">
            <img src="../assets/img/pic.jpeg" alt="">
            <div class="card-inner">
              <div class="card-header">
                  
                  <div class="card-header-text">
                    <p>{{ posts[postId-1].id }}</p>
                    <p>{{ posts[postId-1].name }}</p>
                  </div>
                  <div>
                    <p>Rating: {{posts[postId-1].rating}}</p>
                  </div>
              </div>
              <hr>
              <div class="card-body">
                <div class="card-line">
                  <p>TV</p>
                  <p>•</p>
                  <p v-if="posts[postId-1].ongoing===1">ONGOING</p>
                  <p>•</p>
                  <p>{{posts[postId-1].count}} of 16 EPISODE</p>
                </div>
                <p class="card-genre">{{posts[postId-1].genre}}</p>
                <br>
                <p>Release date: {{posts[postId-1].release}}</p>
              </div>
              <!-- <div>              
                <i @click="edit(post.id)" class="gg-pen"></i>  
                <i @click="deletePost(post.id)" class="gg-trash"></i>
              </div> -->
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props:['posts','postId']

}

</script>
<style scoped>

hr {
    border: 1px solid #EDECEC !important;
    margin-top: 35px;
 }
 .overlay{
    position:absolute;
    width: 100%;
    height: 800px;
    background-color: rgba(0, 0, 0,0.77);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  
.card img {
    width: 200px;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    }
    .card {
      display: flex;
      background-color: white !important;
      flex-direction: row;
      width: 600px;
      border-radius: 5px;
    }
    .card-inner {
      width: 100%;
      height: 100%;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      height: 80px
    }
    .card-header-text{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .card-header p {
      text-align: start;
      margin: 4px 18px;
      font-size: 18px;
      color: #202020
    }
    .card-header p:first-child {
      margin-top: 15px;
      font-weight: 500;
    }
    .card-header p:nth-child(2n){
      font-size:17px;
      color: #828282;
    }
    .card-line {
      display: flex;
      flex-direction: row;
      margin-top: 2px;
    }
    .card-line p{
      
      margin-left: 5px;
      color: #828282;
    }
    
    .card-body {
      display: flex;
      flex-direction: column;
      margin-left: 18px;
      align-items: flex-start;
    }
    .card-body p{
      color: #828282;
      margin: 10px 0px 0px 5px;
      font-weight: 500;
    }
    .card-genre {
      height: 18px;
      border: #EDECEC 1px solid;
      border-radius: 12px;
      padding: 2px 10px;
      color:#565656 !important;
      font-weight: 500;
      width: 3rem;
    }
</style>