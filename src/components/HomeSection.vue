<script setup>
import { useGalleryStore } from '@/store/galleryStore'

const galleryStore = useGalleryStore()

const smoothScroll = (event) => {
  event.preventDefault()
  const targetId = event.target.getAttribute('href').substring(1)
  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <div class="overflow-hidden">
    <section
      id="home"
      :class="{ hidden: galleryStore.isGalleryLoading, 'fade-in': !galleryStore.isGalleryLoading }"
      class="flex h-screen bg-[#1d32ed]"
    >
      <!-- Text -->
      <div class="w-1/2 ml-[2vw] mt-[4vh]">
        <p class="text-[4vw] text-white font-extrabold slide-in-top">Pyramid of DeadLines</p>
        <nav class="flex flex-col ml-[10vw] mt-[30vh] slide-bounce">
          <a href="#gallery" @click="smoothScroll">Gallery</a>
          <a href="#about" @click="smoothScroll">About Me</a>
          <a href="#pricing" @click="smoothScroll">Guidelines & <br />Pricing</a>
        </nav>
      </div>

      <!-- Image -->
      <div class="relative w-1/2">
        <div class="w-[80vw] absolute z-10 top-[-200px] left-[-100px] slide-in-right">
          <img
            src="@/assets/images/home.jpeg"
            alt="Home Image"
            class="object-cover rounded-full overflow-hidden"
          />
        </div>
        <div class="w-[80vw] absolute top-[-200px] left-[-80px] slide-in-right">
          <img
            src="@/assets/images/background.png"
            alt="circle"
            class="circle object-cover rounded-full overflow-hidden"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '@/assets/style/animations.css';

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display:ital,wght@0,400..900');

section {
  font-family: 'Playfair Display', serif;
}

a {
  @apply text-[3vw];
  @apply text-white;
  @apply font-bold;
}

nav a {
  transition:
    transform 0.3s ease,
    margin 0.3s ease;
}

nav a:hover {
  transform: scale(1.5);
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
