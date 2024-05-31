// app/shop/[[...slug]]/page.js	/shop	{}
// app/shop/[[...slug]]/page.js	/shop/a	{ slug: ['a'] }
// app/shop/[[...slug]]/page.js	/shop/a/b	{ slug: ['a', 'b'] }
// app/shop/[[...slug]]/page.js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }
// [[...]] 捕获所有路由
export default function Page({ params }) {
  return <div>{params?.slug?.join(',')}</div>
}

