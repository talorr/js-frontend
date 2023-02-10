<template>
  <div class="text-slate-900 grid max-sm:block sm:grid-cols-main_md lg:grid-cols-main_lg xl:grid-cols-main_xl grid-rows-1 min-h-screen">
    <navbar></navbar>
    <main
        class="col-start-4 col-end-5 max-sm:w-11/12 max-sm:m-auto max-xl:col-start-3 max-xl:col-end-4 row-start-1 row-end-2">
      <input type="search"
             class="block p-2 m-auto mt-1 text-sm mb-1 max-sm:w-full w-3/6 focus:outline-slate-500 focus:text-slate-500"
             placeholder="&#x1F50D;&#xFE0E;  Поиск...">
      <div> Каталог</div>
    </main>
  </div>
</template>

<script>

export default {
  name: "catalog",

}
</script>

<style scoped>

</style>
