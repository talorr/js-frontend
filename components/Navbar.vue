<template>
  <div class="block max-xl:hidden bg-slate-50 col-start-1 col-end-2" id="lef"></div> <!-- Левая заглушка -->
  <div class="block max-xl:hidden col-start-6 col-end-7" id="ref"></div> <!-- Правая заглушка -->
  <div
      class="max-sm:fixed max-sm:w-full max-sm:flex justify-center items-center max-sm:bottom-0 bg-slate-50 xl:col-start-2 xl:col-end-3 lg:col-start-1 lg:col-end-2 row-start-1 row-end-2 p-2"
      id="left_menu">
    <img src="~/assets/img/Logo.png" alt="#">
    <nav class="max-sm:flex justify-center items-center text-slate-500 sticky mt-5">
      <nuxt-link to="/" class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]" exact>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="h-6 pr-4 max-lg:pr-0">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        </svg>
        Главная
      </nuxt-link>
      <nuxt-link to="/list" class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]" exact>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="h-6 pr-4 max-lg:pr-0">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
        </svg>
        Cписок
      </nuxt-link>
      <nuxt-link to="/catalog" class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]" exact>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="h-6 pr-4 max-lg:pr-0">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
        </svg>
        Каталог
      </nuxt-link>
      <nuxt-link to="/login">
        Войти
      </nuxt-link>
            <nuxt-link to="/register">
        Регистрация
      </nuxt-link>
    </nav>

    <div id="userinfo" class="max-sm:static absolute max-lg:p-2 p-4 box-border">
      <nuxt-link to="/user" class="flex">
        <div class="avatar mr-3"
             style="background-image: url('https://sun9-53.userapi.com/impg/4R7XF21Onz9PnRVHzC90S9RSl5GGmiTetH_4Zw/LV5xwrvAAbo.jpg?size=1125x1109&quality=96&sign=350e44c3d7691d95bac76e7202faf4ce&type=album')">
        </div>
        <div>
          <p class="text-sm">UserName</p>
          <p class="text-xs">Name</p>

        </div>
      </nuxt-link>
      <div class="flex justify-between w-40 mt-5">
        <a class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </a>
        <a class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>
        </a>
        <a class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
          </svg>
        </a>
        <a class="hover:text-slate-900 max-lg:flex-col max-md:text-[.8175rem]"
           style="cursor:pointer"
           
           @click.prevent="logout"
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
const { logUserOut } = useAuthStore()
const token = useCookie('cookie')
const router = useRouter();
const user = {
  username: "",
  email: ""
}
const logout = async () => {
  await logUserOut() // call logout func

  router.push('/login');
}
// const userData = await getUser();
console.log(token.value)
</script>

<style scoped>
a.router-link-active {
    background-color: rgb(241, 245, 249);
    color: rgb(30, 41, 59);
}
</style>
