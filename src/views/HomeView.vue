<script setup>
import { ref, computed } from 'vue'
import { siteData } from '../data'
import ProjectCard from '../components/ProjectCard.vue'

const projects = siteData.projects
const categories = ['全部', ...new Set(projects.map((p) => p.category))]

const activeCategory = ref('全部')
const filtered = computed(() =>
  activeCategory.value === '全部'
    ? projects
    : projects.filter((p) => p.category === activeCategory.value)
)
</script>

<template>
  <div class="page">
    <section class="works-section">
      <div class="container">
        <div class="section-head" v-reveal>
          <p class="eyebrow">Selected Works</p>
          <h1 class="page-title">精选作品</h1>
          <p class="section-desc">游戏开发 · UI 设计 · 前端实践</p>
        </div>

        <div class="filter-bar" v-reveal>
          <button
            v-for="c in categories"
            :key="c"
            type="button"
            class="filter-chip"
            :class="{ active: activeCategory === c }"
            @click="activeCategory = c"
          >
            {{ c }}
          </button>
        </div>

        <div class="projects-grid">
          <ProjectCard v-for="p in filtered" :key="p.id" :project="p" />
        </div>
      </div>
    </section>
  </div>
</template>
