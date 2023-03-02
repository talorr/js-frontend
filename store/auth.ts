import { defineStore } from "pinia";
interface UserPayloadInterface {
  login: string;
  password: string;
}
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),

  actions: {
    async authenticateUser({ login, password }: UserPayloadInterface) {
      // Логика авторизации
      const res = await $fetch.raw("https://apiv1.noto.moe/user/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "/*/",
        },
        body: {
          login: "test",
          password: "test",
        },
        credentials: "include",
      });

      if (res != null) {
        this.authenticated = true; // set authenticated  state value to true
      }
    },

    async logUserOut() {
      const token = useCookie("Cookie");
      const pending = await useFetch("https://apiv1.noto.moe/user/logout", {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });
      console.log(pending);
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
    // async getUser() {
    //   const token = useCookie("Cookie");
    //   const { data: user } = await useFetch(
    //     "http://localhost/laravel/public/api/user",
    //     {
    //       method: "get",
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${token.value}`,
    //       },
    //     }
    //   );
    //   return user;
    // },
  },
  // persist: {
  //   storage: persistedState.localStorage,
  // },
});
