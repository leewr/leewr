<html>
  <head>
    <title>home</title>
  </head>
  <body>
   <div>
      {% if current_user %}
        {{current_user.username}}
        <a href='/signout' data-method="post" rel="nofollow">退出</a>
      {% else %}
        <a href='/signin' data-method="post" rel="nofollow">登录</a>
      {% endif %}
   </div>
  </body>
</html>