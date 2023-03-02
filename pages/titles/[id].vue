<template>
    <div
        class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
        <navbar></navbar>
        <main
            class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
            <!-- <input type="search"
                class="block p-2 m-auto mt-1 text-sm mb-1 max-sm:w-full w-3/6 focus:outline-slate-500 focus:text-slate-500"
                placeholder="&#x1F50D;&#xFE0E;  Поиск..."> -->
            <Search></Search>

<div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('https://picsum.photos/600/400/?random')" title="Woman holding a mug">
    </div>
    <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                {{ title.release }}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">{{title.title}}</div>
            <p class="text-gray-700 text-base">Описание.</p>
            <p class="text-gray-700 text-base">Slug {{title.slug}}.</p>
            <p class="text-gray-700 text-base">Студия {{title.studio}}.</p>
            <p class="text-gray-700 text-base">Серий {{title.count}} из 12.</p>
        </div>
        <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/600/400/?random" alt="Avatar of Jonathan Reinink">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">{{ title.rating }}</p>
                <p class="text-gray-600"></p>
            </div>
        </div>
    </div>
</div>
        </main>
    </div>
</template>

<script setup>
import Search from "~/components/search.vue";
const router = useRouter();
const token = useCookie('token')

const { data:resp } = await useFetch(
        `https://apiv1.noto.moe/anime/?slug=${router.currentRoute.value.params.id}`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
          },
        },
)
const title = resp.value.data[0]
console.log(title.value)
</script>

<style scoped>

</style>