export const fetchWithCookie = async (event: H3Event, url: string) => {
  const res = await $fetch.raw(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: "test@gmail.com",
      password: "1234567890",
    },
    credentials: "include",
  });

  for (var pair of res.headers.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  return res._data;

  // const { data: res } = await useAsyncData("auth", () => {
  //   return $fetch(url, {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     baseURL: url,
  //     body: {
  //       login: "test",
  //       password: "test",
  //     },
  //     method: "post",
  //   });
  // });
  // console.log(res.value);
};
