// getServerSideProps(page router) -> server components(app router)
// 迁移文档：https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops
async function getTodos() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, { cache: 'no-store' })
  const todos = await res.json()

  return todos
}

export default async function Page() {
  const todos = await getTodos()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.id}:{todo.title}
        </li>
      ))}
    </ul>
  )
}
