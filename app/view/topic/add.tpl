<html>
<head>
    <title>topic edit</title>
    <link rel="stylesheet" type="text/css" href="/public/static/css/doc.css">
</head>
<body>
<div>
   <form method="post" action="/topic/create">
    <input type="hidden" name="tab" value="article">
    <input type="hidden" name="content" value="">
    <input type="hidden" name="summary" value="">
   <div class="header">
        <a href="/" class="logo">
            MONO 文档
        </a>
        <div class="fr">
            <button type="submit" class="btn save">保存</button>
            <div class="userInfo">
                <img src="https://unsplash.it/900/380/?random" width="28px" height="28px" class="user-avatar" />
            </div>
        </div>
   </div>
   <div class="docwrap">
      <div class="edittoolbar" id="toolbar"></div>
      <div class="editor-wrapper">
        <div class="editor-box">
            <div class="editor-title">
                 <input type="text" name="title" value="无标题" placeholder="无标题"/>
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