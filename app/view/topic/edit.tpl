<html>
<head>
    <title>topic edit</title>
    <link rel="stylesheet" type="text/css" href="/public/static/css/doc.css">
</head>
<body>
<div>
   <form method="post" action="/topic/update">
   <input type="hidden" name="tab" value="article">
   <input type="hidden" name="id" value="{{data.id}}">
   <input type="hidden" name="content" value="{{data.content}}">
   <input type="hidden" name="summary" value="{{data.summary}}">
   <div class="header">
        <a href="#" class="logo">
            MONO 文档
        </a>
        <div class="fr">
            <a href="/topic/create" class="btn add">新建</a>
            <button type="submit" class="btn save">保存</button>
            <div class="userInfo">
                <img src="https://thirdqq.qlogo.cn/g?b=oidb&k=dzeMCrE5wvjL0zUznFR89A&s=0" width="28px" height="28px" class="user-avatar" />
            </div>
        </div>
   </div>
   <div class="docwrap">
      <div class="edittoolbar" id="toolbar"></div>
      <div class="editor-wrapper">
        <div class="editor-box">
            <div class="editor-title">
                 <input type="text" value="{{data.title}}" name="title" placeholder="{{data.title}}"/>
            </div>
            <div class="editor">
              <div id="editor">
              </div>
            </div>
        </div>
      </div>
   </div>
   </form>
   <script type="text/javascript" src="/public/static/js/plugin/jquery.js"></script>
   <script type="text/javascript" src="//unpkg.com/wangeditor/release/wangEditor.min.js"></script>
  <script type="text/javascript" src="/public/static/js/plugin/cookie/jquery.cookie.js">
  </script>
  <script type="text/javascript" src="/public/static/js/plugin/highlight/highlight.pack.js">
  </script>
  <script type="text/javascript" src="/public/static/js/editor.js"></script>
</div>
</body>
</html>