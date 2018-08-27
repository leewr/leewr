// seajs.config({
// 	base: '/public/static/js',
//     alias: {
//         jquery: 'plugin/jquery'
//     }
// }).use(['jquery', 'one/common/Tab'], function() {
	
// });


// $('.ui-tab-tabs > .ui-tab-tab').tab()
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
		url: window.location.href + '/toggleLike',
		success: function (data) {
			console.log(data.success)
			if(data.success) {
				alert($(this).hasClass('followed'))
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