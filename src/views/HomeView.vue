<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue'
import HomeSection from '@/components/HomeSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import AboutSection from '@/components/AboutSection.vue'
import PricingSection from '@/components/PricingSection.vue'
</script>

<template>
  <div>
    <NavbarComponent />
    <HomeSection />
    <GallerySection />
    <AboutSection />
    <PricingSection />
  </div>
</template>

<style scoped>
div {
  scroll-behavior: smooth;
}
</style>
