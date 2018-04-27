<html>
  <head>
    <title>topic edit</title>
  </head>
  <body>
   <div>
     {% for tab in tabs%}
      {{tab[0]}}
     {% endfor%}
       {{data.edit_error}}
     <form method="post" action="/topic/update">
        <input type="hidden" name="id" value="{{data.id}}">
        <select name="tab">
            <option>article</option>
        </select>
        <input type="text" name="title" value="{{data.title}}"/>
        <textarea name="content">{{data.content}}</textarea>
        <button type="submit">提交</button>
     </form>
   </div>
  </body>
</html>