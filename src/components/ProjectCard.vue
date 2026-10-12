<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const hasDetail = computed(() => !!props.project.video)
</script>

<template>
  <article class="project-card" v-reveal>
    <div class="project-cover">
      <img :src="project.image" :alt="project.title" loading="lazy" />
    </div>

    <div class="project-body">
      <div class="project-top">
        <h3 class="project-title">{{ project.title }}</h3>
        <span class="project-cat">{{ project.category }}</span>
      </div>
      <p class="project-desc">{{ project.description }}</p>

      <div class="project-bottom">
        <ul class="project-tags">
          <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
        </ul>
        <RouterLink v-if="hasDetail" :to="{ name: 'game-detail', params: { id: project.id } }" class="project-link">
          查看详情 →
        </RouterLink>
        <a v-else-if="project.file" :href="project.file" class="project-link" download>
          下载演示包 →
        </a>
      </div>
    </div>
  </article>
</template>
