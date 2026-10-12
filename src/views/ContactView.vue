<script setup>
import { siteData } from '../data'

const contact = siteData.contact
</script>

<template>
  <div class="page">
    <section class="contact-section">
      <div class="container">
        <div class="section-head" v-reveal>
          <p class="eyebrow">Contact</p>
          <h1 class="page-title">联系我</h1>
          <p class="section-desc">欢迎交流合作与游戏开发机会</p>
        </div>

        <div class="contact-grid" v-reveal>
          <a class="contact-card" :href="`tel:${contact.tel}`">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="contact-info">
              <p class="contact-label">电话 / Tel</p>
              <p class="contact-value">{{ contact.tel }}</p>
            </div>
          </a>

          <a class="contact-card" :href="`mailto:${contact.email}`">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 6L2 7"/>
              </svg>
            </div>
            <div class="contact-info">
              <p class="contact-label">邮箱 / Email</p>
              <p class="contact-value">{{ contact.email }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
