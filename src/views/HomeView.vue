<script setup>
import { ref, onMounted, nextTick } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import HomeSection from '@/components/HomeSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import AboutSection from '@/components/AboutSection.vue'
import PricingSection from '@/components/PricingSection.vue'

const isGalleryLoading = ref(true)

const checkImageLoading = () => {
  let loadedImage = 0
  const galleryImages = document.querySelectorAll('.gallery-img')
  const totalImages = galleryImages.length

  if (totalImages === 0) {
    isGalleryLoading.value = false
    return
  }

  galleryImages.forEach((img) => {
    if (img.complete) {
      loadedImage++
    } else {
      img.onload = () => {
        loadedImage++
        if (loadedImage === totalImages) {
          isGalleryLoading.value = false
        }
      }
    }
  })
}

onMounted(() => {
  nextTick(checkImageLoading)
})
</script>

<template>
  <div>
    <NavbarComponent />
    <HomeSection :isGalleryLoading="isGalleryLoading" />
    <GallerySection
      @update-loading="
        (value) => {
          isGalleryLoading = value
        }
      "
    />
    <AboutSection />
    <PricingSection />
  </div>
</template>

<style scoped>
div {
  scroll-behavior: smooth;
}
</style>
