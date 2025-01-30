import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGalleryStore = defineStore('gallery', () => {
  const isGalleryLoading = ref(true)

  const checkImageLoading = (galleryRow) => {
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

  return { isGalleryLoading, checkImageLoading }
})
