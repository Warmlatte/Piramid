<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref('home')

// 定義標籤項目
const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About Me' },
  { id: 'pricing', label: 'Guidelines & Pricing' },
]

// 切換標籤
const switchTab = (tabId) => {
  activeTab.value = tabId
  document.getElementById(tabId)?.scrollIntoView({ behavior: 'smooth' })
}

const isVisible = ref(false)

const handleScroll = () => {
  const portfolioSection = document.getElementById('gallery')
  if (portfolioSection) {
    const rect = portfolioSection.getBoundingClientRect()
    isVisible.value = rect.top <= 0
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-transform duration-300',
      isVisible ? 'translate-y-0' : '-translate-y-full',
      'bg-white/90 shadow-md',
    ]"
  >
    <ul class="flex justify-center space-x-8 py-4">
      <li v-for="tab in tabs" :key="tab.id">
        <button
          @click="switchTab(tab.id)"
          :class="[
            'text-lg font-semibold px-4 py-2 transition-all duration-300',
            activeTab === tab.id
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-blue-500',
          ]"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
