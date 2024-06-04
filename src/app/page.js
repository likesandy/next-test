// 先构建出生产版本，再运行生产服务
// pnpm build
// pnpm start
async function getTodos() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomInt(100)}`, {
    // 缓存10s数据
    // https://nextjs.org/docs/app/api-reference/functions/fetch#optionsnextrevalidate
    next: { revalidate: 10 },
  })
  const todo = await res.json()

  return todo
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export default async function Index() {
  const todo = await getTodos()

  return (
    <div key={todo.id}>
      {todo.id}:{todo.title}
    </div>
  )
}
