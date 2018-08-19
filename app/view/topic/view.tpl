<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{data.title}} -- READY READ -- 锐读</title>
	<link rel="stylesheet" type="text/css" href="/public/static/css/index.css">
</head>
<body>
  <div class="header">
    <div class="headerwrap">
      <div class="logo">
        <a href="#">READY READ</a>
      </div>
      <div class="navbar">
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/read">阅读</a></li>
          <li><a href="/read">客户端</a></li>
        </ul>
      </div>
      <div class="userbox">
        {% if current_user %}
          {{current_user.username}}
          <a href='/signout' data-method="post" rel="nofollow">退出</a>
          <a href="/topic/note/{{data.id}}">编辑</a>
        {% else %}
          <a href='/signin' data-method="post" rel="nofollow">登录</a>
        {% endif %}
     </div>
   </div>
  </div>
  <div class="indexWrap">
    <div class="indexList">
	    <div class="articl-cpt detail">
	    	<div class="title-box">
				<h3 class="title">{{data.title}}</h3>
	    	</div>
	    	<div class="article">
				{{data.content}}
	    	</div>
	    </div>
    </div>
  </div>
  <div class="footer">
    <div class="foot">
      <div class="foot-logo"></div> 
      <div class="foot-link">
        <p>
        <a href="#" target="_blank">关于我们</a> 
        <a href="#" target="_blank">友情链接</a> 
        <a href="#" target="_blank">片刻帮助</a>
        <a href="#" target="_blank">意见反馈</a>
        <a href="#" target="_blank">成长记忆</a>
        </p> 
        <p>All rights reserved © 2016 pianke.me /黔ICP备17008875号-1</p>
      </div> 
      <div class="foot-icon">
        
      </div>
    </div>
  </div>
</body>
</html>