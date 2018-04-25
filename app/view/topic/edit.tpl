<html>
  <head>
    <title>topic edit</title>
  </head>
  <body>
   <div>
     {% for tab in tabs%}
      {{tab[0]}}
     {% endfor%}
     <form method="post" action="/topic/create">
        <select name="tab">
            <option>article</option>
        </select>
        <input type="text" name="title"/>
        <textarea name="content"></textarea>
         <button type="submit">提交</button>
     </form>
   </div>
  </body>
</html>