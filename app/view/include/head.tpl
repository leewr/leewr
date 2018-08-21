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
    	<a class="userInfo" href="/user/{{current_user.id}}">
            <img src="https://unsplash.it/900/380/?random" width="40px" height="40px" class="user-avatar" />
        </a>
         <!--  {{current_user.username}}
          <a href='/signout' data-method="post" rel="nofollow">退出</a> -->
          <a href="/topic/create" class="ui-button btn-sign-in">写文章</a>
          {% if current_user.id == data.authorId %}
          <a href="/topic/note/{{data.id}}">编辑</a>
          {% endif %}
        {% else %}
         <a href='/signin' class="login-link" data-method="post" rel="nofollow">登录</a>
         <a href="/signup" rel="nofollow" class="ui-button btn-sign-in">注册</a>
        {% endif %}
     </div>
   </div>
</div>