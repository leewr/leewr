$('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
})

$('.like').on('click', function () {
    var that = $(this)
    $.ajax({
        headers: {
            'x-csrf-token': $.cookie('csrfToken')
        },
        type: 'post',
        url: window.location.href + '/like',
        success: function (data) {
            if(data.success) {
                if (data.status === 401) {
                    // window.location = window.location.protocol + window.location.host + '/signin'
                    window.location.href = '/signin'
                }
                if (that.hasClass('liked')) {
                    that.removeClass('liked')
                    that.find('.num').text(parseInt(that.find('.num').text()) - 1)
                    // that.html('关注')
                } else {
                    that.addClass('liked')
                    that.find('.num').text(parseInt(that.find('.num').text()) + 1)
                }
            } else {

            }
        },
        error: function (err) {
            console.log(err)
        }
    })
})

$('.follow').hover(function () {
    if ($(this).hasClass('followed')) {
        $(this).html('取消关注')
    }
}, function () {
    if ($(this).hasClass('followed')) {
        $(this).html('已关注')
    }
}).on('click', function () {
    var that = $('.follow')
    $.ajax({
        headers: {
            'x-csrf-token': $.cookie('csrfToken')
        },
        type: 'post',
        url: '/u/'+ that.attr('data-id') +'/toggleFollow',
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