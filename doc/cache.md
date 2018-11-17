从浏览器缓存看网页优化
首先看一张图
![图](https://upload-images.jianshu.io/upload_images/330266-09ce149fb3f5cbee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当用户第一次请求的时候是没有缓存的，所以直接加载服务器资源，请求响应response，和浏览器缓存协商Expries/Cache-Control/Etag/Last-Modified都会保存下来，最后就是页面渲染呈现了。这是一个正常的过程。
下面我们看用户第二次访问的时候。
浏览器请求，有缓存，有缓存判断缓存是否过期，如果没有过去加载缓存。如果过期，查看是否有Etag有向浏览器发送带有If-None-Match的请求头，没有查看是否有Last-Modified，有向服务器请求带If-Modified—Since后浏览器进行判断是返回200还是304。304表示无更新从缓存中读取，有更新加载新的资源。Last-modified为否的时候直接向服务器请求。最后都会和浏览器缓存协商。最后就是呈现了。其中缓存过期的设置nginx一般为4个小时，其实可以让缓存过期过期实践边长。

下面我们来分析前端缓存有那些方式。
常见的有cookies、localstorage、sessionstorage、web SQL\indexdedDb。前端网页速度优化上有减小请求数量、减小资源大小、两个最基本的方法。
我们可以利用localStorage来缓存一些经常不变化的资源，比如首页不变的图片、样式、js等。
这些资源直接从缓存中加载的同时，请求资源数量、大小都同时减小。是非常不错的优化方法选择。
下面是利用localStorage来进行图片缓存。当检测到缓存中有图片的时候直接从缓存中读取，这样就减少了一次请求以及相应的减少了请求资源大小。

利用canvas转图片的ctx.drawImage(url, x, y, width, height)




