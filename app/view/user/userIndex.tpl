<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>个人主页 -- READY READ -- 锐读</title>
	<link rel="stylesheet" type="text/css" href="/public/static/css/index.css">
</head>
<body>
  {% include "include/head.tpl" %}
  <div class="indexWrap">
    <div class="indexList">
      <div class="userIndexBox">
        <div class="mainLeft">
          <div class="infoBox">
            <a href="/u/7b997dd8cefa" class="imgHolder">
              <img src="https://unsplash.it/900/380/?random" width="80px" height="80px" alt="">
            </a>
            <div class="userInfo">
              <p class="userName">
                <a class="name" href="/u/{{authorId}}">{{authorData.username}}</a>
                {% if current_user.id != authorId %}
                  {% if isFollowed.status %} 
                    <a class="follow followed">
                      已关注
                    </a>
                  {% else %}
                    <a class="follow ">
                      关注
                    </a>
                  {% endif %}
                {% endif %}
              </p>
              <ul>
                <li>
                  <a href="/u/5/following">
                    <p>{{authorData.followNum}}</p>
                    <p>关注<i class="iconfont ic-arrow"></i></p>
                  </a>
                </li>
                <li>
                  <a href="/u/5/followers">
                    <p>{{authorData.fansNum}}</p>
                    <p>粉丝<i class="iconfont ic-arrow"></i></p>
                  </a>
                </li>
                <li>
                  <a href="/u/5">
                    <p>{{authorData.articleNum}}</p>
                    <p>文章<i class="iconfont ic-arrow"></i></p>
                  </a>
                </li>
                <li>
                    <p>{{authorData.worldNum}}</p>
                    <p>字数<i class="iconfont ic-arrow"></i></p>
                </li>
                <li>
                    <p>{{authorData.likeNum}}</p>
                    <p>收获喜欢<i class="iconfont ic-arrow"></i></p>
                </li>
              </ul>
            </div>
          </div>
          <div class="articleBox">
            <div class="ui-tab-tabs">
                <a href="javascript:" class="ui-tab-tab checked" data-rel="tabTarget1">
                  <i class="icon iconfont icon-text"></i>
                  文章
                </a>
                <a href="javascript:" class="ui-tab-tab" data-rel="tabTarget2">
                  <i class="icon iconfont icon-xiaoxi"></i>
                动态</a>
                <a href="javascript:" class="ui-tab-tab" data-rel="tabTarget3">
                  <i class="icon iconfont icon-pinglun"></i>
                最新评论</a>
                <a href="javascript:" class="ui-tab-tab" data-rel="tabTarget4">
                  <i class="icon iconfont icon-remen"></i>
                热门</a>
            </div>
            <div class="ui-tab-contents">
                <div id="tabTarget1" class="ui-tab-content checked" role="tabpanel">
                  {% for item in data %}
                    <div class="article-item">
                      <h3><a href="/topic/{{item.id}}" class="title">{{item.title}}</a></h3>
                      <div class="summary">
                        {{item.summary}}
                      </div>
                      <div class="info">
                        <span class="view">
                          <i class="icon iconfont icon-view2"></i>
                          {{item.view}}
                        </span>
                        <span class="commont">
                          <i class="icon iconfont icon-xiaoxi"></i>
                          {{item.commentNum}}
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
                <div id="tabTarget2" class="ui-tab-content" role="tabpane2">ssss</div>
                <div id="tabTarget3" class="ui-tab-content" role="tabpane3">ss2222ss</div>
                <div id="tabTarget4" class="ui-tab-content" role="tabpane4">
                  {% for item in hotTop %}
                    <div class="article-item">
                      <h3><a href="/topic/{{item.id}}" class="title">{{item.title}}</a></h3>
                      <div class="summary">
                        {{item.summary}}
                      </div>
                      <div class="info">
                        <span class="view">
                          <i class="icon iconfont icon-view2"></i>
                          {{item.view}} 评论
                        </span>
                        <span class="comment">
                          <i class="icon iconfont icon-xiaoxi"></i>
                          {{item.commentNum}}
                        </span>
                         <span class="like">
                          <i class="icon iconfont icon-xiaoxi"></i>
                         {{item.likeNum}}
                        </span>
                        <span class="time">
                          {{item.modifyTime | timeFormate}}
                        </span>
                      </div>
                    </div>
                  {% endfor %}
                </div>
            </div>
          </div>
        </div>
        <div class="mainRight">
          <div class="rightBox">
            <h3>个人介绍</h3>
            <div class="introduce">
              前端工程师一枚
            </div>
          </div>
          <div class="rightBox">
            <h3><i class="icon iconfont icon-newshot"></i><a href="#" class="dark">我关注的文档</a></h3>
            <h3><i class="icon iconfont icon-xihuan"></i><a href="#" class="dark">我喜欢的文章</a></h3>
          </div>
          <div class="rightBox">
            <h3>我创建的知识库</h3>
            <ul class="ritemList">
              <li><i class="icon iconfont icon-newshot"></i><a href="" class="dark">前端</a></li>
              <li><i class="icon iconfont icon-newshot"></i><a href="" class="dark">安卓开发</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {% include "include/footer.tpl" %}
  <script type="text/javascript" src="/public/static/js/plugin/jquery.js"></script>
  <script type="text/javascript" src="/public/static/js/plugin/cookie/jquery.cookie.js"></script>
  <script type="text/javascript" src="/public/static/js/one/common/Tab.js"></script>
  <script type="text/javascript" src="/public/static/js/userIndex.js"></script>
</body>
</html>