import { defineStore } from "pinia";
export const useDataStore = defineStore("data", {
  state: () => ({}),
  actions: {
    async getTitleData() {
      const token = useCookie("token");
      const { data: posts } = await useFetch(
        "http://localhost/laravel/public/api/posts",
        {
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      return posts;
    },
  },
});
