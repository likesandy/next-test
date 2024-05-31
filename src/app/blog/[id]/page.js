// app/blog/[id]/page.js	/blog/a	{ id: 'a' }
// app/blog/[id]/page.js	/blog/b	{ id: 'b' }
// app/blog/[id]/page.js	/blog/c	{ id: 'c' }
// []只能匹配一级路由
export default function Page({ params }) {
  return <div>{params.id}</div>
}

