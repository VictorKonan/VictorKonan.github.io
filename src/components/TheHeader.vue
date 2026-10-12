<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-header" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="container header-inner">
      <RouterLink to="/" class="logo" @click="menuOpen = false">
        <span class="logo-mark">Z</span>
        <span class="logo-text">张春楠</span>
      </RouterLink>

      <nav class="nav" :class="{ open: menuOpen }">
        <RouterLink to="/" class="nav-link" @click="menuOpen = false">作品</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="menuOpen = false">联系我</RouterLink>
      </nav>

      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-label="切换菜单"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>
