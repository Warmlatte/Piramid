<script setup>
import { onMounted, ref } from 'vue'
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

const isGalleryLoading = ref(true)

const checkImageLoading = () => {
  let loadingImage = 0
  const totalImage = galleryRow.flat().length

  galleryRow.flat().forEach(({ src }) => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      loadingImage++
      if (loadingImage === totalImage) {
        isGalleryLoading.value = false
      }
    }
  })
}

onMounted(() => {
  checkImageLoading()
})
</script>

<template>
  <div
    v-if="isGalleryLoading"
    class="fixed inset-0 flex items-center justify-center bg-[#1d32ed] z-50"
  >
    <p class="text-white text-3xl font-bold animate-pulse">
      Loading... Eat a cookie wait a minute! 🍪(≧◡≦)
    </p>
  </div>

  <section v-else id="gallery" class="flex relative">
    <div class="w-1/4 h-full pt-32">
      <img
        class="bg-white object-cover w-[23vw] ml-[2vw]"
        src="@/assets/images/galleryText.png"
        alt="Gallery Text"
      />
    </div>

    <div class="w-3/4 h-full pt-36 bg-[#334ac9] border-l-[7px] border-[#ff96fd]">
      <div v-for="(row, rowIndex) in galleryRow" :key="rowIndex">
        <div class="flex flex-row gap-10 mb-5 justify-center">
          <div
            v-for="(image, index) in row"
            :key="index"
            class="w-[13vw] h-[13vw] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#ff96fd] transition-all"
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
        <div class="modal-box p-0">
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
