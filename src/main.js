import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reveal } from './directives/reveal'
import './styles/main.css'

const app = createApp(App)

// 全局滚动渐入指令
app.directive('reveal', reveal)

app.use(router)
app.mount('#app')
