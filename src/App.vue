<template>
  <div id="app">

    <div class="headerPage">
        <div class="NameSite">
          <router-link to="/"><h2>Noto</h2></router-link>
        </div>
        <nav class="authPage">
          <a @click="logout()">Выйти</a>
        </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {

    };
  },
  
  methods: {
    logout() {
      axios.post('http://127.0.0.1:8000/api/logout').then(this.$router.push('/sign_in'))
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
body{margin: 0;

}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}
nav a:hover{
  color:#596570;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.headerPage {
  display: flex;
  justify-content: space-between;
  z-index: -200;
}
.authPage {
  display: flex;
  align-items: center;
}
.authPage a {
  text-decoration: none;
  color: black;
}
.authPage a {
  text-decoration: none;
  color: black;
}
.NameSite a {

  text-decoration: none;
  color: black;
}
h2{
  margin-left: 20px;
}
h2:hover{
  color: rgb(80, 80, 80)
}
</style>
