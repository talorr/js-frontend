<template>

    <div>
      <div class="card">
          <img src="../assets/img/pic.jpeg" alt="">
          <div class="card-inner">
            <div class="card-header">
                <div class="card-header-text">
                  <p>{{ posts[postId-1].name.substring(0, 50) }}</p>
                  <p>{{ posts[postId-1].name.substring(0, 25) }}..</p>
                </div>
                <div class="rating">
                  <i class="material-icons">star</i>
                  <p>{{posts[postId-1].rating}}</p>
                </div>
            </div>
            <hr>
            <div class="card-body">
              <div class="card-line">
                <p>TV</p>
                <p>•</p>
                <p v-if="posts[postId-1].ongoing===1">ONGOING</p>
                <p>•</p>
                <p>{{posts[postId-1].count}} of 16 EP</p>
              </div>
              <p class="card-genre">{{posts[postId-1].genre}}</p>

              <p>Release date: {{posts[postId-1].release}}</p>
            </div>
            <!-- <div>              
              <i @click="edit(post.id)" class="gg-pen"></i>  
              <i @click="deletePost(post.id)" class="gg-trash"></i>
            </div> -->
          </div>
        </div>
  </div>
    
</template>
<script>
export default {
    props:['posts','postId']

}

</script>
<style scoped>

i{
  font-size: 20px;
  color: rgb(241, 237, 0);
  margin-right: 3px
}
.rating {
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  height: 20px;
  align-items: center;
  margin-right: 5px;
}
.rating p{
  font-weight: 500 !important;
  font-size: 11px !important; 
  color:#202020 !important;
}
hr {
    border: 1px solid #EDECEC !important;
    margin: 2px 0;
 }

  
.card img {
    width: 100px;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    }
    .card {
      box-shadow: 1px 1px 3px;
      display: flex;
      background-color: white !important;
      flex-direction: row;
      width: 320px;
      height: 150px;
      border-radius: 5px;
    }
    .card-inner {
      width: 220px;

    }
    .card-header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      height: 64px;
    }
    .card-header-text{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 8px;
    }
    .card-header-text p{
      text-align: start;
      margin: 1px 8px;
      font-size: 11px;
    }
    .card-header p {
      color: #202020
    }

    .card-header p:first-child {
      font-weight: 500;
      margin-top: 0;
    }
    .card-header p:nth-child(2n){
      font-size:10px;
      color: #828282;
    }
    .card-line {
      display: flex;
      flex-direction: row;
      margin-top: 2px;
    }
    .card-line p{
      font-size: 10px;
      margin-left: 5px;
      color: #828282;
    }
    
    .card-body {
      display: flex;
      flex-direction: column;
      margin-left: 8px ;
      align-items: flex-start;
    }
    .card-body p{
      color: #828282;
      margin: 2px 4px 0px 0px;
      font-weight: 500;
      font-size: 10px;
    }
    .card-genre {
      height: 14px;
      border: #EDECEC 1px solid;
      border-radius: 12px;
      padding: -2px 2px;
      color:#565656 !important;
      font-weight: 500;
      width: 3rem;
      margin-top: 3px !important;
      margin-bottom: 3px !important;
    }
</style>