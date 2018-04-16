<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list.data %}
        <li class="item">
          <a href="/news/{{ item.id }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>