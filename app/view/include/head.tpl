<div class="header">
    <div class="headerwrap">
      <div class="logo">
        <a href="/">READY READ</a>
      </div>
      <div class="navbar">
        <ul>
          <li class="active"><a href="/">首页</a></li>
          <li><a href="/read">阅读</a></li>
          <li><a href="/read">客户端</a></li>
        </ul>
      </div>
     <div class="userbox">
        {% if current_user %}
        <div class="userInfobox">
          <a class="userInfo" href="/u/{{current_user.id}}">
            <img src="{{current_user.avatarUrl}}" width="40px" height="40px" class="user-avatar" />
          </a>
          <div class="subMenu">
            <ul>
              <li><a href="/u/{{current_user.id}}">我的主页</a></li>
              <li><a href="/u/{{current_user.id}}">我的收藏</a></li>
              <li><a href="/u/{{current_user.id}}">喜欢的文章</a></li>
              <li><a href="/setting/index">设置</a></li>
              <li><a href="/signout">退出</a></li>
            </ul>
          </div>
        </div>
    	  
         <!--  {{current_user.username}}
          <a href='/signout' data-method="post" rel="nofollow">退出</a> -->
          <a href="/topic/create" class="ui-button btn-sign-in">写文章</a>
          
        {% else %}
          <div class="userInfobox">
         <a href='/signin' class="login-link" data-method="post" rel="nofollow">登录</a>
         <a href="/signup" rel="nofollow" class="ui-button btn-sign-in">注册</a>
         </div>
        {% endif %}
     </div>
   </div>
</div>