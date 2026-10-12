import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import GameDetailView from '../views/GameDetailView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '作品' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: '联系我' } },
    {
      path: '/portfolio/:id',
      name: 'game-detail',
      component: GameDetailView,
      meta: { title: '项目详情' }
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || '作品'} · 张春楠`
})

export default router
