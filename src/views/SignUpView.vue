<template>
  <div>
    <div class="register">
      <router-link to="/sign_in">Войти</router-link> |
      <router-link to="/sign_up">Регистрация</router-link>
    </div>
      <h2>Регистрация аккаунта</h2>
      <form @submit.prevent="signUp()">
        <input type="text" v-model="name" placeholder="Введите имя">
        <input type="email" v-model="email" placeholder="Введите почту">
        <input type="password" v-model="password" placeholder="Введите пароль">
        <p v-if="msg">{{ msg }}</p>
        <button type="submit">Регистрация</button>

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
      name: '',
      email: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    async signUp() {
      try {
        const credentials = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
        this.$router.push('/sign_in');
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};
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
.register {
  font-weight: bold;
  color: #2c3e50;
}
</style>