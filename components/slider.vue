<template>
  <swiper class="w-full h-80 m-auto p-4 mt-24"
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="text in swiperTextBase" :key="text.description" class="pb-14 sm-flex sm:justify-evenly">
      <div class="ml-52 relative">
        <h1 class="absolute text-2xl text-black top-5 left-5 ">{{ text.author }}</h1>
        <p class="absolute text-gray-1000 top-5 left-5">{{ text.description }}</p>
      </div>
      <img :src="text.img" alt="image" class="bg-white opacity-60">
    </swiper-slide>

  </swiper>
</template>
<script>
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {ref} from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperTextBase = ref([
      {
        author: 'Автор 1',
        description: 'Описание 1',
        img: 'https://ip1.anime-pictures.net/direct-images/2ed/2ed71f39cf2a07ed3caff14c11dc4852.jpg?if=ANIME-PICTURES.NET_-_786740-7680x4320-original-oli-long+hair-looking+at+viewer-fringe-highres.jpg'
      },
      {
        author: 'Автор 2',
        description: 'Описание 2',
        img: 'https://ip1.anime-pictures.net/direct-images/ad6/ad63daa9889f8068a55bb65cdacff617.png?if=ANIME-PICTURES.NET_-_787427-6680x4700-original-muka+tsuku-single-long+hair-looking+at+viewer-blush.png'
      },
      {
        author: 'Автор 3',
        description: 'Описание 3',
        img: 'https://ip1.anime-pictures.net/direct-images/6e4/6e43aa85574d5a47513eeeab79611db5.jpg?if=ANIME-PICTURES.NET_-_787501-2716x1920-original-toosaka+asagi-single-long+hair-fringe-highres.jpg'
      },
      {
        author: 'Автор 4',
        description: 'Описание 4',
        img: 'https://ip1.anime-pictures.net/direct-images/83d/83dc9a05adb0cff8f30440d4dfba9ba6.jpg?if=ANIME-PICTURES.NET_-_787499-2716x1920-original-toosaka+asagi-long+hair-blush-fringe-highres.jpg'
      },

    ])
    return {
      modules: [Navigation, Pagination], swiperTextBase
    };
  },
};
</script>