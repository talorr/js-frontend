import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      // Логика авторизации
      const { data, pending }: any = await useFetch(
        "http://localhost/laravel/public/api/login",
        {
          method: "post",
          headers: {
            Accept: "application/json",
          },
          body: {
            email,
            password,
          },
        }
      ).catch((error) => console.log("API ERROR", error));
      this.loading = pending;
      if (data.value) {
        // Задаём куки
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    // Выход из аккаунта, удаление токена из куки
    async logUserOut() {
      const token = useCookie("token");
      const pending = await useFetch(
        "http://localhost/laravel/public/api/logout",
        {
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      console.log(pending);
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
    async getUser() {
      const token = useCookie("token");
      const { data: user } = await useFetch(
        "http://localhost/laravel/public/api/user",
        {
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      return user;
    },
  },
});
