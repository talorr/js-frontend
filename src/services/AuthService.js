import axios from 'axios';
const url = 'http://localhost/laravel/public/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'login', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'register', credentials)
      .then(response => response.data);
  },
};