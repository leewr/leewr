<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{data.title}} -- READY READ -- 锐读</title>
	<link rel="stylesheet" type="text/css" href="/public/static/css/index.css">
  <link rel="stylesheet" type="text/css" href="/public/static/css/wangeditor.css">
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
                  <a class="follow followed btn" data-id="{{data.authorId}}">
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
          <div class="followAuthor">
            <div class="avatar">
              <img src="{{author.avatarUrl}}" alt="">
            </div>
            <div class="authorInfo">
              <div class="authorInfo-l">
                <h4><span>{{author.username}}</span></h4>
                <p>写了 <span>{{author.worldNum}}</span> 字，被 <span>{{author.fansNum}}</span> 人关注，获得了 <span>{{author.likeNum}} </span>个喜欢</p>
              </div>
              {% if current_user.id != data.authorId %}
                {% if isFollowed.status %} 
                  <a class="authorInfo-r ui-button follow followed" data-id="{{data.authorId}}">已关注</a>
                {% else %}
                  <a class="follow btn authorInfo-r ui-button" data-id="{{data.authorId}}">
                    关注
                  </a>
                {% endif %}
              {% endif %}
            </div>
          </div>
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
        <div class="comment">
          <div class="commentBox">
            <div class="avatar">
              <img src="{{current_user.avatarUrl}}" />
            </div>
            <div class="commentArea">
              <textarea class="textarea" id="commentArea" placeholder="写下评论"></textarea>
              <div class="postBtn">
                <button class="submitBtn" id="submitBtn">
                  发布
                </button>
              </div>
            </div>
          </div>
          <div class="commentList">
            <h3>共<span>{{comment.total}}</span>条评论</h3>
            {% for item in comment.data %}
            <div class="commentItem" data-id="{{item.cid}}">
                <div class="avatar">
                  <img src="//upload.jianshu.io/users/upload_avatars/3334769/95a8e26b-bb13-4d93-92b3-2e504cf66237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">
                </div>
                <div class="commentCont">
                  <h4><span class="comUser">{{item.authorName}}</span><span class="time">{{item.createTime | timeFormate}}</span></h4>
                  <div class="commentInfo">
                    {{item.content}}
                  </div>
                  <div class="commBot">
                    <a class="comThumbs">
                      <i class="icon iconfont icon-zan"></i>
                      <span class="num">{{item.thumbs}}</span>
                    </a>
                    <a href="">
                      <i class="icon iconfont icon-xiaoxi"></i>
                    </a>
                  </div>
                </div>
            </div>
            {% endfor %}
          </div>
        </div>
	    </div>
    </div>
  </div>
  <input type="hidden" name="authorId" value="{{current_user.id}}"></input>
  <input type="hidden" name="articleId" value="{{data.id}}"></input>
  {% include "include/footer.tpl" %}
  <script type="text/javascript" src="/public/static/js/plugin/jquery.js"></script>
  <script type="text/javascript" src="/public/static/js/plugin/cookie/jquery.cookie.js">
  </script>
  <script type="text/javascript" src="/public/static/js/plugin/highlight/highlight.pack.js">
  </script>
  {{ helper.assets.getScript('static/js/detail.js') | safe }}
</body>
</html>