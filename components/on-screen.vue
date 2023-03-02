<template>
  <h3 class="mt-8 text-xl font-bold ">Сейчас на экранах</h3>
  <div class="flex justify-between w-full mt-4 relative">
    <div v-for="card in cardsBase" :key="card.description" class="title">
      <div class="card ml-36 absolute flex bg-white h-48 w-64 border-2 border-amber-black rounded-r-lg ">
        <div class="ml-3">
          <div class="flex w-full justify-between">
            <div>
              <div class="text-base">{{ card.title }}</div>
              <div class="text-xs">{{ card.title_rus }}</div>
            </div>
            <div>{{ card.rating }}</div>
          </div>
          <div class="mt-10 text-xs">{{ card.genre }}</div>
          <div class="text-xs">{{ card.status }}</div>
        </div>
      </div>
      <nuxt-link >
        <div class="flex-row w-36">
          <img :src="card.img" alt="#" class="h-48 rounded-md">
          <div class="text-sm font-semibold mt-2">{{ card.title }}</div>
          <div class="text-xs mt-1">{{ card.studio }}</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "on-screen",
  data: function () {
    return {
      moduleName: [
        {message: "Сейчас на экранах"}
      ],
      cardsBase: [
        {
          title: 'Chainsaw Man',
          title_rus: 'Человек Бензопила',
          studio: 'Mappa',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.9',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Kage no Jitsuryoku sha no Nariakutte',
          title_rus: 'Каге но Дзицуреку ша но Нариакутте',
          studio: 'Nexus',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '3.9',
          img: 'https://ip1.anime-pictures.net/direct-images/ad6/ad63daa9889f8068a55bb65cdacff617.png?if=ANIME-PICTURES.NET_-_787427-6680x4700-original-muka+tsuku-single-long+hair-looking+at+viewer-blush.png'
        },
        {
          title: 'One Piece',
          title_rus: 'Ван Пис',
          studio: 'Toei Animation',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.1',
          img: 'https://ip1.anime-pictures.net/direct-images/6e4/6e43aa85574d5a47513eeeab79611db5.jpg?if=ANIME-PICTURES.NET_-_787501-2716x1920-original-toosaka+asagi-single-long+hair-fringe-highres.jpg'
        },
        {
          title: 'SPY×FAMILY Pt. 2',
          studio: 'Studio Wit',
          title_rus: 'Шпионская Семья',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.9',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Bocchi the Rock!',
          studio: 'CloverWorks',
          title_rus: 'Бокки- скала',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '2.1',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Blue Lock',
          studio: '8-bit',
          title_rus: 'Синий Замок',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '4.3',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
        {
          title: 'Boku no Hero Academia 6',
          studio: 'bones',
          title_rus: 'Боку но Герой Академии',
          status: 'Запланировано',
          genre: 'Экшн',
          rating: '3.2',
          img: 'https://images.wallpaperscraft.ru/image/single/devushka_zont_anime_151317_1280x720.jpg'
        },
      ]
    }
  }
}
</script>


<style scoped>
.card {
  visibility: hidden;
}
.title:hover .card {
  visibility: visible;
}
</style>