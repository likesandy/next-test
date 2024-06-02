平行路由（插槽）跟路由组一样，不会影响 URL（不存在类似/team 这样的路由）
平行路由可以每个路由定义独立的 error 和 loadng

新建一个 about 路由，如果不在平行路由下添加 default 的话会 404，layout 中获取不到 team 和 analytics

实现一个 modal 功能

/app/page.js = /app/@children/page.js

<!-- TODO -->
