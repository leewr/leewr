# 项目说明

 www.leewr.com 是处于兴趣所建，是自我前端技术的实践地。 

 项目包括pc站、h5站、app端（开发中）整站源码。项目后端采用egg.js+mysql搭建，pc最初的版本采用nunjucks模板渲染，后期采用vue ssr渲染（开发中）。移动端采用react开发，项目为多用户的个人社区（主要为我的文章发布站点）。

初期内容为pc端编辑发布（无后台管理系统），后期采用爬虫同步更新我的微信公众号文章。

# 项目结构

app： 为egg.js项目

Mono：移动端h5项目

android: 安卓端项目

admin： 管理系统

## 开发

### Development
1、导入数据库 dadcbase

2、安装依赖

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

## 记录

不断优化首页列表资源大小，
1、nginx开启gzip，并且statisc on；
2、打包开启gzip文件生成，对所有开启压缩
3、图片资源采用独立域名，处理浏览器只能同时处理6个请求的问题
3、nginx 设置图片filter_image 模块开启图片大小剪切 aaaa_100x100.png类似格式
4、图片保存的时候开启webp图片格式存储，支持webp时候采用webp图片展示。
5、前端采用手动判断是否支持webp。
5. todo nginx支持对webp图片格式的剪裁 / 2018-12-11 nginx 更换图片剪裁方式 lua + gm。
   支持webp，下一个版本修改lua，支持webp图片。

## 感想
这些年就想在互联网上做一点点自己的东西，所以做了这个一个站点。陆陆续续的不断完善中。




