<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>READY READ -- 锐读</title>
	<link rel="stylesheet" type="text/css" href="/public/static/css/index.css">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
  {% include "include/head.tpl" %}
  <div class="topwrap">
    <div class="slider">
      <div class="item">
        <a href="">
          <img src="https://upload.jianshu.io/admin_banners/web_images/4424/28fa64c724d3d67bc47994c5b9e43b43474069d9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540">
        </a>
      </div>
    </div>
    <div class="toplist">
      <ul>
        <li><a href=""><img src="/public/static/images/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"></a></li>
        <li><a href=""><img src="/public/static/images/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"></a></li>
        <li><a href=""><img src="/public/static/images/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"></a></li>
        <li><a href=""><img src="/public/static/images/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"></a></li>
      <li>
    </div>
  </div>
  <div class="indexWrap">
    <div class="indexList">
    {% for item in data %}
      <div class="article-item">
        <h3><a href="/topic/{{item.id}}" class="title">{{item.title}}</a></h3>
        <div class="summary">
          {{item.summary}}
        </div>
        <div class="info">
          <span class="view">
            <i class="icon iconfont icon-xiaoxi"></i>
            {{item.view}}
          </span>
          <span class="commont">
            <i class="icon iconfont icon-pinglun"></i>
            {{item.commontNum}}
          </span>
           <span class="like">
            <i class="icon iconfont icon-xihuan"></i>
           {{item.likeNum}}
          </span>
          <span class="time">
            {{item.modifyTime | dayFormate}}
          </span>
        </div>
      </div>
    {% endfor %}
    </div>
  </div>
  {% include "include/footer.tpl" %}
</body>
</html>