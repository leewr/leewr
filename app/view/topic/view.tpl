<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{data.title}} -- READY READ -- 锐读</title>
	<link rel="stylesheet" type="text/css" href="/public/static/css/index.css">
  <link rel="stylesheet" type="text/css" href="/public/static/js/plugin/wangeditor.css">
</head>
<body>
  {% include "include/head.tpl" %}
  <div class="indexWrap">
    <div class="indexList">
	    <div class="articl-cpt detail">
	    	<div class="title-box">
				  <h3 class="title">{{data.title}}</h3>
	    	</div>
        <div class="author-box">
          <img height="48px" width="48px" src="//upload.jianshu.io/users/upload_avatars/3334769/95a8e26b-bb13-4d93-92b3-2e504cf66237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">
          <div class="authot-box-info">
            <div>
              <a href="/u/{{data.authorId}}">{{author.username}}</a>
              {% if current_user.id != data.authorId %}
                {% if isFollowed.status %} 
                  <a class="follow followed btn">
                    已关注
                  </a>
                {% else %}
                  <a class="follow btn" data-id="{{data.authorId}}">
                    关注
                  </a>
                {% endif %}
              {% endif %}
            </div>
            <div class="f12 gray infobox">
              {{data.createTime | timeFormate}}
              评论： {{data.commentNum}}
              阅读： {{data.view}}
              喜欢： {{data.likeNum}}
            </div>
          </div>
          {% if current_user.id == data.authorId %}
            <div class="editBtn">
              <a href="/topic/note/{{data.id}}">编辑</a>
            </div>
            {% endif %}
        </div>
	    	<div class="article w-e-text">
				{{ data.content | safe}}
	    	</div>
        <div class="articel-bot">
          <a class="like {% if isLiked.status %} liked {% endif %}">
            <i class="icon iconfont icon-xihuan"></i>
            <span class="text">喜欢</span>
            <span class="num">{{data.likeNum}}</span>
          </a>
          <div class="share">
            <span>微信</span>
            <span>微博</span>
            <span>图片</span>
          </div>
        </div>
	    </div>
    </div>
  </div>
  {% include "include/footer.tpl" %}
  <script type="text/javascript" src="/public/static/js/plugin/jquery.js"></script>
  <script type="text/javascript" src="/public/static/js/plugin/cookie/jquery.cookie.js">
  </script>
  <script type="text/javascript" src="/public/static/js/plugin/highlight/highlight.pack.js">
  </script>
  
  <script type="text/javascript" src="/public/static/js/detail.js"></script>
</body>
</html>