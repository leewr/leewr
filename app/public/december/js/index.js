//微信中获取openid
var thisDate = new Date().getTime();

//获取登录态
var login = function(){
	var pram = {
        method: 'isLogin',
        subtime: thisDate
    };
    Webapp.get('/auth.do',pram,function(data){
		if(data.status == 200 && data.result){
    		window.__isLogin = true;
		}
    });
}


$(function(){
	// 悬浮小球
	// mobileBuoy('.buoy')
	// 跑马灯数据列表
	// queryAllInviteRecord()
	
	if (TounaApi.isAppWebview) {
		login()
		$('.reg').on('click', function () {
			if (!window.__isLogin) {
				TounaApi.register()
			} else {
				TounaApi.liCaiPage()
			}
		})
		$('.loan').on('click', function() {
			if (!window.__isLogin) {
				TounaApi.getLogin()
			} else {
				TounaApi.liCaiPage()
			}
		})
	} else {
		$('.reg,.loan').attr('href', '/app-download2.html')
	}

	// $('.reg').on('click', function() {
	// 	if(!window.__isLogin) { //未登录
	// 		if (TounaApi.isAppWebview) {
	// 			TounaApi.register()
	// 		} else {
	// 			window.location.href = '/app-download2.html';
	// 		}
	// 	} else {
	// 		if (TounaApi.isAppWebview) {
	// 			TounaApi.liCaiPage()
	// 		} else {
	// 			window.location.href = '/app-download2.html';
	// 		}
	// 	}
	// })
	// $('.loan').on('click', function() {
	// 	if(!window.__isLogin) {
	// 		if (TounaApi.isAppWebview) {
	// 			TounaApi.getLogin()
	// 		} else {
	// 			window.location.href = '/app-download2.html';
	// 		}
	// 	} else {
	// 		if (TounaApi.isAppWebview) {
	// 			TounaApi.liCaiPage()
	// 		} else {
	// 			// 移动站跳转到引导下载页
	// 			window.location.href = '/app-download2.html';
	// 		}
			
	// 	}
	// })
	
	//打开活动规则弹窗
	$('.ruleBottomRight').off().on('click',function(){
		$('.mask,.popup,.ruleBox').show();
		popupCenter('popup');
	})
	
	//关闭规则和邀请记录弹窗和提示开通存管
	$('.close').off().on('click',function(){
		$('.mask,.popup,.ruleBox,.invitationRecordBox,.cgbStatus').hide();
	})
	
})

//去掉alert网址
window.alert = function(name){  
    var iframe = document.createElement("IFRAME");  
    iframe.style.display="none";  
    iframe.setAttribute("src", 'data:text/plain,');  
    document.documentElement.appendChild(iframe);  
    window.frames[0].window.alert(name);  
    iframe.parentNode.removeChild(iframe);  
}