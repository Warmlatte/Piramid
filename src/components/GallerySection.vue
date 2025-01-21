<script setup>
import DividerComponents from './DividerComponents.vue'

const galleryRow = [
  [
    {
      src: '/gallery/picture1.png',
      alt: 'Picture 1',
    },
    {
      src: '/gallery/picture2.png',
      alt: 'Picture 2',
    },
    {
      src: '/gallery/picture3.png',
      alt: 'Picture 3',
    },
    {
      src: '/gallery/picture4.png',
      alt: 'Picture 4',
    },
  ],
  [
    {
      src: '/gallery/picture5.png',
      alt: 'Picture 5',
    },
    {
      src: '/gallery/picture6.jpg',
      alt: 'Picture 6',
    },
    {
      src: '/gallery/picture7.png',
      alt: 'Picture 7',
    },
    {
      src: '/gallery/picture8.png',
      alt: 'Picture 8',
    },
  ],
  [
    {
      src: '/gallery/picture9.png',
      alt: 'Picture 9',
    },
    {
      src: '/gallery/picture10.png',
      alt: 'Picture 10',
    },
    {
      src: '/gallery/picture11.png',
      alt: 'Picture 11',
    },
    {
      src: '/gallery/picture12.jpg',
      alt: 'Picture 12',
    },
  ],
  [
    {
      src: '/gallery/picture13.png',
      alt: 'Picture 13',
    },
    {
      src: '/gallery/picture14.png',
      alt: 'Picture 14',
    },
    {
      src: '/gallery/picture15.png',
      alt: 'Picture 15',
    },
    {
      src: '/gallery/picture16.png',
      alt: 'Picture 16',
    },
  ],
]
</script>

<template>
  <section id="gallery" class="flex relative">
    <div class="w-[300px] h-full mt-[207px]">
      <img class="bg-white object-cover" src="@/assets/images/galleryText.png" alt="" />
    </div>

    <div class="main w-[1000px] h-full pt-[200px]">
      <div v-for="(row, rowIndex) in galleryRow" :key="rowIndex">
        <div class="flex flex-row gap-8 pt-5 ml-[42px]">
          <div
            v-for="(image, index) in row"
            :key="index"
            class="w-[200px] h-[200px] rounded-3xl overflow-hidden"
          >
            <img class="object-cover" :src="image.src" :alt="image.alt" />
          </div>
        </div>

        <div class="p-5"><DividerComponents /></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  background-color: #334ac9;
  border-left: 8px solid #ff96fd;
}
</style>
