// seajs.config({
// 	base: '/public/static/js',
//     alias: {
//         jquery: 'plugin/jquery'
//     }
// }).use(['jquery', 'one/common/Tab'], function() {
	
// });


$('.ui-tab-tabs > .ui-tab-tab').tab();
$('.follow').hover(function () {
	if ($(this).hasClass('followed')) {
		$(this).html('取消关注')
	}
}, function () {
	if ($(this).hasClass('followed')) {
		$(this).html('已关注')
	}
}).on('click', function () {
	var that = $(this)
	$.ajax({
		headers: {
			'x-csrf-token': $.cookie('csrfToken')
		},
		type: 'post',
		url: window.location.href + '/toggleFollow',
		success: function (data) {
			if(data.success) {
				if (that.hasClass('followed')) {
					that.removeClass('followed')
					that.html('关注')
				} else {
					that.addClass('followed')
				}
			}
		},
		error: function (err) {
			console.log(err)
		}
	})
})

// (function (global, factory) {
//     if (typeof define === 'function' && (define.amd || define.cmd)) {
//         define(factory);
//     } else {
//         // global.Tab = factory();
//     }
// }(this, function () {
// 	$('.follow').hover(function () {
// 		if ($(this).hasClass('followed')) {
// 			$(this).html('取消关注')
// 		}
// 	}, function () {
// 		if ($(this).hasClass('followed')) {
// 			$(this).html('已关注')
// 		}
// 	}).on('click', function () {
// 		var that = $(this)
// 		$.ajax({
// 			headers: {
// 				'x-csrf-token': $.cookie('csrfToken')
// 			},
// 			type: 'post',
// 			url: window.location.href + '/toggleLike',
// 			success: function (data) {
// 				if(data.success) {
// 					if (that.hasClass('followed')) {
// 						that.removeClass('followed')
// 						that.html('关注')
// 					} else {
// 						that.addClass('followed')
// 					}
// 				}
// 			},
// 			error: function (err) {
// 				console.log(err)
// 			}
// 		})
// 	})
// }));
