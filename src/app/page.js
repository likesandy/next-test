async function getTodos() {
  // fetch 默认开启缓存（效果等价于SSG）
  // getstaticprops -> fetch
  // app router SSG迁移文档：https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const todos = await res.json()

  return todos
}

export default async function Index() {
  const todos = await getTodos()

  return todos.map((todo) => (
    <div key={todo.id}>
      {todo.id}:{todo.title}
    </div>
  ))
}
