# 张春楠 · 个人作品集

基于 **Vue 3 + Vite + vue-router** 构建的个人作品集站点，支持 GitHub Pages 部署。

## 技术栈

- Vue 3（组合式 API）
- Vite 6
- vue-router 4（Hash 模式，兼容子路径部署与本地直接打开）
- 作品数据存放于 `src/data/site.json`

## 本地开发

```bash
npm install     # 安装依赖
npm run dev     # 启动开发服务器
npm run build   # 构建到 dist/
npm run preview # 本地预览构建产物
```

## 部署到 GitHub Pages

仓库已内置 `.github/workflows/deploy.yml`，推送 `main`（或 `master`）分支后：

1. 在 GitHub 仓库 Settings → Pages 中，将 Source 设置为 **GitHub Actions**；
2. 每次 push 会自动执行 `npm ci && npm run build` 并发布 `dist/` 到 Pages。

也可以手动构建后把 `dist/` 目录内容推到 Pages 分支。

## 目录说明

```
public/
  img/       # 作品封面图与头像
  video/     # 游戏演示视频（demo.mp4）
  builds/    # 可执行演示包（ui.exe / chat.exe / fps.exe ...）
src/
  components/ # 公共组件（导航、页脚、作品卡片）
  data/       # 站点数据（site.json）
  directives/ # 自定义指令（滚动渐入）
  router/     # 路由配置
  styles/     # 全局样式
  views/      # 页面视图（作品集 / 关于我 / 项目详情）
```
