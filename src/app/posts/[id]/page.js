// 文档：https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 与动态路由结合使用
export async function generateStaticParams() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.json())

  return posts.map((post) => ({
    id: post.id + '',
  }))
}

export default function Page({ params: { id, title } }) {
  console.log('🚀 ~ Page ~ id:', id)
}

