// 站点数据入口：导入 JSON 并拼接静态资源基础路径
import raw from './site.json'

const base = import.meta.env.BASE_URL

export const siteData = {
  ...raw,
  projects: raw.projects.map((p) => ({
    ...p,
    image: base + p.image,
    video: p.video ? base + p.video : null
  }))
}
