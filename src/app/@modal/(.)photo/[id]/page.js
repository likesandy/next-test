// photos/[id]/page.js
import { photos } from '@/app/data'

// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
// 匹配的是路由的层级而不是文件夹的层级，就比如路由组、平行路由这些不会影响 URL 的文件夹就不会被计算层级
export default function PhotoPage({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  return (
    <img
      style={{ width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      src={photo?.src}
    />
  )
}

