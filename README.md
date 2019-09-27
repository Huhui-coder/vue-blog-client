该项目是基于 vue+vue-router+vuex+vuetifyjs+express+mongoDB 搭建的个人博客系统，分为前端和后端两个部分。

前端地址：https://github.com/Huhui-coder/vue-blog-client

后端地址：https://github.com/Huhui-coder/express-blog-api

```
git clone git@github.com:Huhui-coder/vue-blog-client.git
npm i
npm run serve
npm run build
```

- [√]] 用户登录，注册。
- [√] Markdown文本编辑器。
- [√] 文章发表，浏览，编辑，删除。
- [√] 请求拦截，在登录之后，每一次的请求都带上 Authorization 字段
- [√] 路由拦截，状态码为 401 时，将路由重定向至登陆页。
- [√] 权限控制，未登录时，不可进行文章的发表，编辑和删除操作。

部分系统截图
![屏幕快照 2019-09-27 下午7.34.11.png](https://i.loli.net/2019/09/27/CoyKgTIBZjqvW4a.png)
![屏幕快照 2019-09-27 下午7.36.30.png](https://i.loli.net/2019/09/27/X9INiBOzETYyphG.png)
