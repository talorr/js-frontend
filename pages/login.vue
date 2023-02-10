<template>
    <div class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">

        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div v-if="!authenticated" class="w-full max-w-md space-y-8">
            <div>

              <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
              <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Авторизация</h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true">
              <div class="-space-y-px rounded-md shadow-sm">
                <div>
                  <label for="email-address" class="sr-only">Email</label>
                  <input id="email-address" name="email" type="email" autocomplete="email" required
                    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email"
                    v-model="user.email"
                    >
                </div>
                <div>
                  <label for="password" class="sr-only">Пароль</label>
                  <input id="password" name="password" type="password" autocomplete="current-password" required
                    class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Пароль"
                    v-model="user.password"
                    >
                </div>
              </div>
        
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900">Запомнить меня</label>
                </div>
        
                <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Забыли пароль?</a>
                </div>
              </div>
        
              <div>
                <button type="submit" @click.prevent="login"
                  class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <!-- Heroicon name: mini/lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
    </main>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
    email: 'test@gmail.com', 
    password: '1234567890',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
};
</script>

<style scoped>

</style>