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
    async searchData(search: string) {
      const token = useCookie("token");
      const { data: searchResult } = await useFetch(
        `http://localhost/laravel/public/api/posts/search/${search}`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      console.log(searchResult, "gsagsag", "gsaga");
      return searchResult;
    },
  },
});
