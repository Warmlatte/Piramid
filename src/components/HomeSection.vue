<script setup>
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
    <section id="home" class="flex relative w-full h-[690px] bg-[#1d32ed]">
      <div class="absolute z-10">
        <h1 class="text-[43px] text-white font-extrabold ml-5 mt-5 slide-in-top">
          Pyramid of DeadLines
        </h1>
        <nav class="flex flex-col absolute top-[300px] left-[100px] slide-bounce">
          <a href="#gallery" @click="smoothScroll" class="text-4xl text-white font-bold">Gallery</a>
          <a href="#about" @click="smoothScroll" class="text-4xl text-white font-bold">About Me</a>
          <a href="#pricing" @click="smoothScroll" class="text-4xl text-white font-bold"
            >Guidelines & <br />Pricing</a
          >
        </nav>
      </div>

      <div class="relative">
        <div class="absolute w-[1000px] h-[1000px] top-[-300px] left-[420px] slide-in-right">
          <img
            src="@/assets/images/home.jpg"
            alt="Home Image"
            class="absolute top-32 z-10 object-cover rounded-full"
          />
          <div
            class="circle absolute rounded-full top-[-5px] left-[30px] w-[1280px] h-[1280px]"
          ></div>
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

nav a {
  transition:
    transform 0.3s ease,
    margin 0.3s ease;
}

nav a:hover {
  transform: scale(1.5);
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
