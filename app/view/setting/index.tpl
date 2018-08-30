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
				<form action="">
					<div class="clearfix">
						<label class="left">
							头像
						</label>
						<div class="ovh">
							<input type="hidden" id="idImgUrl" value="">
							<label for="validateFile" class="uploadImage">
								<img class="avatar" src="https://upload.jianshu.io/users/upload_avatars/330266/92d0ddfe-07f1-402d-a820-1df8c8e0e886.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300" width="100px" height="100px">
							</label>
							
						</div>
					</div>
					<div class="clearfix mt15">
						<label class="left">
							昵称
						</label>
						<div class="ovh">
							<input type="text" class="ui-input">
						</div>
					</div>
					<div class="clearfix mt15">
						<label class="left">
							电子邮件
						</label>
						<div class="ovh">
							<input type="text" class="ui-input">
						</div>
					</div>
					<div class="clearfix mt15">
                        <span class="left">您的性别<span class="red abs">*</span></span>
                        <div class="ovh">
                            <input type="radio" id="radioMale" name="validateRadio" required=""><label class="ui-radio" for="radioMale"></label><label class="mr20 ml5" for="radioMale">男士</label>
                            <input type="radio" id="radioFemale" name="validateRadio" required=""><label class="ui-radio" for="radioFemale"></label><label for="radioFemale" class="ml5">女士</label>
                        </div>
                    </div>
					<div class="clearfix mt15">
                        <label class="left">个人网站</label>
                        <div class="ovh">
                            <input type="url" class="ui-input" pattern="^(http|https)\:\/\/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\:\?\,\'\/\\\+&amp;amp;%\$#\=~])*$">
                            <span class="gray ml20 mt10 f14">type='url'</span>
                        </div>
                    </div>
                    <div class="clearfix mt15">
                        <label class="left">个人简介</label>
                        <div class="cell">
                            <div class="ui-textarea-x l" style="width:500px;">
                                <textarea id="txtCount" minlength="5" maxlength="_200_" rows="5" placeholder="测试">随机内容，计数测试</textarea>
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
                            <label for="validateSubmit" class="ui-button ui-button-primary">提交</label>
                        </div>
                    </div>
				</form>
				<form><input type="file" id="validateFile" class="clip" accept="image/*"></form>
			</div>
		</div>
	</div>
{% include "include/footer.tpl" %}
</body>
</html>