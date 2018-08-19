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
      <div class="edittoolbar"></div>
      <div class="editor-wrapper">
        <div class="editor-box">
            <div class="editor-title">
                 <input type="text" name="title" value="{{data.title}}"  placeholder="{{data.title}}"/>
            </div>
            <textarea id="editor" class="editor" name="content" autocorrect="off" autocomplete="off"  tabindex="-1" contenteditable="true">{{data.content}}</textarea>
        </div>
      </div>
   </div>
   </form>
    <!-- {% for tab in tabs%}
    {{tab[0]}}
    {% endfor%}
    <form method="post" action="/topic/create">
        <select name="tab">
            <option>article</option>
        </select>
        <input type="text" name="title"/>
        <textarea name="content"></textarea>
        <button type="submit">提交</button>
    </form> -->
</div>
</body>
</html>