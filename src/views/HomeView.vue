<template>
  <div>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/views/Search";

export default {
  name: 'HomeView',
  components: {Search},
  data() {
    return {};
  },
}
</script>

<style scoped>

</style>
