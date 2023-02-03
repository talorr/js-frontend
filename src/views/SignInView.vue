<template>
  <div>
    <div class="login">
        <router-link to="/sign_in">Войти</router-link> |
        <router-link to="/sign_up">Регистрация</router-link>
    </div>
      <h2>Войдите в аккаунт</h2>
      <form @submit.prevent="login()">
        <input type="email" v-model="email" placeholder="Введите почту">
        <input type="password" v-model="password" placeholder="Введите пароль">
        <p v-if="msg">{{ msg }}</p>
        <button type="submit">Войти</button>

      </form>
  </div>
</template>

<script>
import axios from "axios";
import AuthService from "@/services/AuthService";

export default {
  name: "SignInView",
 data() {
    return {
        email: '',
        password: '',
        msg: ''
    }
 },
 methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
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
  height: 30px;
  margin: 5px;
  border-radius: 10px;
}
.login {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
</style>