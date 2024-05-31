// app/blog/[...id]/page.js	/blog/a	{ id: ['a'] }
// app/blog/[...id]/page.js	/blog/a/b	{ id: ['a', 'b'] }
// app/blog/[...id]/page.js	/blog/a/b/c	{ id: ['a', 'b', 'c'] }
// [...]匹配多级路由
export default function Page({ params }) {
  return <div>{params.id.join(',')}</div>
}

