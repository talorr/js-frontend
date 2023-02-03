import axios from 'axios';
const url = 'http://localhost/laravel/public/api/';
export default {
  createPost(credentials) {
    return axios
      .post(url + 'posts/create', credentials)
      .then(response => response.data);
  },
  createComment(credentials, id) {
    return axios
      .post(url + 'posts/' + post.id + '/comment', credentials, console.log(id))
      .then(response => response.data);
  }
};