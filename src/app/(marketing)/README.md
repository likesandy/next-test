个人感觉好处不大

- 把路由按照逻辑分组，不影响 URL
- 创建不用的 layout（分组下的路由使用的是分组下的 layout）

tip：跨路由组会重新加载整个页面（因为切换到一个全新的页面）
比如：/test -> /blog
但是：/test/about -> /test/blog (局部渲染)

