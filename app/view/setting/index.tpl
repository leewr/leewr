<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>设置 -- READY READ -- 锐读</title>
	<link rel="stylesheet" type="text/css" href="/public/static/css/index.css">
</head>
<body>
{% include "include/head.tpl" %}
	<div class="indexWrap">
		<div class="indexList setting">
			<div class="aside">
				<ul>
					<li class="active"><i></i><a href="" class="dark">基础设置</a></li>
					<li class=""><i></i><a href="" class="dark">个人资料</a></li>
					<li class=""><i></i><a href="" class="dark">微博认证</a></li>
					<li class=""><i></i><a href="" class="dark">黑名单</a></li>
					<li class=""><i></i><a href="" class="dark">赞赏设置</a></li>
					<li class=""><i></i><a href="" class="dark">账号管理</a></li>
				</ul>
			</div>
			<div class="settingMain">
				<form action="/setting/update?_csrf={{ ctx.csrf |  safe }}" method="post" id="settingUpload">
					<div class="clearfix">
						<label class="left">
							头像
						</label>
						<div class="ovh">
							<input type="hidden" id="idImgUrl" name="avatarUrl" value="{{data.avatarUrl}}">
							<label for="validateFile" class="uploadImage">
								<img class="avatar" src="{{data.avatarUrl}}" width="100px" height="100px">
							</label>
						</div>
					</div>
					<div class="clearfix mt15">
						<label class="left">
							昵称
						</label>
						<div class="ovh">
							<input type="text" class="ui-input" value="{{data.username}}" name="username">
						</div>
					</div>
					<div class="clearfix mt15">
						<label class="left">
							电子邮件
						</label>
						<div class="ovh">
							<input type="text" class="ui-input" name="email" value="{{data.email}}">
						</div>
					</div>
					<div class="clearfix mt15">
                        <span class="left">您的性别</span>
                        <div class="ovh">

                            <input type="radio" id="radioMale" name="sex" required="" value="1" {% if data.sex == 1 %} checked {% endif %}><label class="ui-radio" for="radioMale"></label><label class="mr20 ml5" for="radioMale">男士</label>
                            <input type="radio" id="radioFemale" name="sex" required="" value="0" {% if data.sex == 0 %} checked {% endif %}><label class="ui-radio" for="radioFemale"></label><label for="radioFemale" class="ml5">女士</label>
                        </div>
                    </div>
					<div class="clearfix mt15">
                        <label class="left">个人网站</label>
                        <div class="ovh">
                            <input type="url" class="ui-input" value="{{data.homePage}}" name="homePage" pattern="^(http|https)\:\/\/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\:\?\,\'\/\\\+&amp;amp;%\$#\=~])*$">
                            
                        </div>
                    </div>
                    <div class="clearfix mt15">
                        <label class="left">个人简介</label>
                        <div class="cell">
                            <div class="ui-textarea-x l" style="width:500px;">
                                <textarea name="intro" id="txtCount" minlength="5" maxlength="_200_" rows="5" placeholder="请填写你的个人简介">{{data.intro}}</textarea>
                                <div class="ui-textarea"></div>
                                <label class="ui-textarea-count" for="txtCount">
                                    <span>9</span>/<span>200</span>
                                </label>
                            </div>
                            <span class="gray ml20 f14">minlength="5", maxlength="200"</span>
                        </div>
                    </div>
                    <div class="clearfix mt20">
                        <span class="left">&nbsp;</span>
                        <div class="cell">
                            <input type="submit" id="validateSubmit" class="clip">
                            <label for="validateSubmit" class="ui-button ui-button-primary">保存</label>
                        </div>
                    </div>
				</form>
				<form action="/upload?_csrf={{ ctx.csrf |  safe }}" method="post" id="imagesUpload" enctype="multipart/form-data">
					<input class="clip" type="file" id="validateFile" name="file"  accept="image/*">
					<input class="clip" type="submit" value="Upload"  id="submit" />
				</form>
			</div>
		</div>
	</div>
{% include "include/footer.tpl" %}
<script type="text/javascript" src="/public/static/js/plugin/jquery.js"></script>
<script type="text/javascript" src="/public/static/js/plugin/cookie/jquery.cookie.js"></script>
<script type="text/javascript">
	

</script>
<script>
	$('#validateFile').on('change', function () {
		$('#submit').click()
	})
  $('#imagesUpload').submit(function(e) {
    e.preventDefault();
    var formData = new FormData();
    // formData.append('name', 'aaa');
    // Attach file
    formData.append('image', $('input[type=file]')[0].files[0]);
    // console.log(formData);

    $.ajax({
      url: '/upload?_csrf=' + getCsrf(),
      data: formData,
      method: 'POST',
      contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
      processData: false, // NEEDED, DON'T OMIT THIS
      success: function(result) {
        console.log(result);
        if (result.success && result.status == 200) {
			$('img.avatar').attr('src', result.data)
			$('#idImgUrl').val(result.data)
        }
      },
      error: function(responseStr) {
        alert("error", responseStr);
      }
    });

    function getCsrf() {
      var keyValue = document.cookie.match('(^|;) ?csrfToken=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : null;
    }
  });
  </script>
</body>
</html>