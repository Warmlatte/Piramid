<script setup>
import { ref } from 'vue'
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

const modalImage = ref(null)
const modal = ref(null)

const openModal = (imageSrc) => {
  modalImage.value = imageSrc
  modal.value.showModal()
}
</script>

<template>
  <section id="gallery" class="flex relative">
    <div class="w-[280px] h-full mt-[207px]">
      <img
        class="bg-white object-cover w-[240px] ml-[30px]"
        src="@/assets/images/galleryText.png"
        alt=""
      />
    </div>

    <div class="w-[1020px] h-full pt-[200px] bg-[#334ac9] border-l-[7px] border-[#ff96fd]">
      <div v-for="(row, rowIndex) in galleryRow" :key="rowIndex">
        <div class="flex flex-row gap-6 pt-5 ml-[100px]">
          <div
            v-for="(image, index) in row"
            :key="index"
            class="w-[180px] h-[180px] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#ff96fd] transition-all"
          >
            <button
              class="btn btn-ghost w-full h-full bg-transparent hover:bg-transparent hover:shadow-none p-0"
              @click="openModal(image.src)"
            >
              <img
                class="object-cover w-full h-full rounded-xl"
                :src="image.src"
                :alt="image.alt"
                loading="lazy"
              />
            </button>
          </div>
        </div>
        <div class="p-5"><DividerComponents /></div>
      </div>
      <dialog id="fullImage" ref="modal" class="modal">
        <div class="modal-box">
          <img :src="modalImage" class="object-cover w-full h-auto" />
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </section>
</template>

<style scoped></style>
