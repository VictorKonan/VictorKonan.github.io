<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { siteData } from '../data'

const route = useRoute()
const router = useRouter()

const project = computed(() => siteData.projects.find((p) => p.id === route.params.id))
const videoError = ref(false)

if (!project.value) {
  router.replace('/')
}
</script>

<template>
  <div class="page" v-if="project">
    <section class="detail-section">
      <div class="container">
        <div class="section-head" v-reveal>
          <p class="eyebrow">Project</p>
          <h1 class="page-title">{{ project.title }}</h1>
          <p class="section-desc">{{ project.description }}</p>
        </div>

        <div v-if="project.video && !videoError" class="detail-video" v-reveal>
          <video controls preload="metadata" @error="videoError = true">
            <source :src="project.video" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>

        <div class="detail-body" v-reveal>
          <div class="detail-meta">
            <div class="meta-row">
              <span class="meta-label">类型</span>
              <span>{{ project.category }}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">标签</span>
              <span class="tag-row">
                <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
              </span>
            </div>
          </div>

          <RouterLink to="/" class="btn btn-ghost">← 返回作品列表</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
