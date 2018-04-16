<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
   <div>
     {{helper.shtml(detail.data.content) | safe}}
   </div>
  </body>
</html>