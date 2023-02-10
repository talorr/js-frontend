<template>
  <div class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
        class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <input type="search"
             class="block p-2 m-auto mt-1 text-sm mb-1 max-sm:w-full w-3/6 focus:outline-slate-500 focus:text-slate-500"
             placeholder="&#x1F50D;&#xFE0E;  Поиск...">
      <div>Список</div>


      <!-- Карточка тайтла -->

        <div v-for="(title,index) in data" :key="data.indexOf(title)" class="container my-12 mx-auto px-4 md:px-12">

          <div class="flex flex-wrap -mx-1 lg:-mx-4">

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
              <article class="overflow-hidden rounded-lg shadow-lg">
            
                <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                </a>
            
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black">
                      <NuxtLink :to="`/title/${index}`">{{ title.name }}</NuxtLink>

                    </a>
                  </h1>
                  <p class="text-grey-darker text-sm">
                    {{title.release}}
                  </p>
                </header>
            
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                  <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                    <p class="ml-2 text-sm">
                      {{title.studio}}
                    </p>
                  </a>
                  <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span class="hidden">Show more</span>
                    <i class="fa fa-heart"></i>
                  </a>
                </footer>
  
              </article>

            </div>

        </div>


        </div>

    </main>
  </div>
</template>

<script setup>
// Вывод инфы
import { useDataStore } from '~/store/data'; // import the data store 
const { getTitleData } = useDataStore();
const data = await getTitleData();
</script>

<style scoped>

</style>
