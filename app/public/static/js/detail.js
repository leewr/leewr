$('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
})

// 喜欢
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

// 关注
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

// 提交评论
$('.submitBtn').click(function () {
    var authorId = $('input[name="authorId"]').val()
    var articleId = $('input[name="articleId"]').val()
    var content = $('.textarea').val()
    if (!authorId) {
        window.location.href = '/signin'
    }
    if (!content) {
        alert('评论内容不能为空')
        return
    }
    $.ajax({
        headers: {
            'x-csrf-token': $.cookie('csrfToken')
        },
        type: 'post',
        url: window.location.href + '/comment',
        data: {
            content: content,
            articleId: articleId,
            authorId: authorId
        },
        success: function (data) {
            if(data.success) {
                if (data.status === 401) {
                    // window.location = window.location.protocol + window.location.host + '/signin'
                    // window.location.href = '/signin'
                }
                if (data.status == 200) {
                    alert('评论成功')
                }
                
            } else {

            }
        },
        error: function (err) {
            console.log(err)
        }
    })
})

// 评论点赞
$('.comThumbs').click(function () {
    var that = $(this)
    var commentId = $(this).parents('.commentItem').attr('data-id')
    console.log(commentId)
    $.ajax({
        headers: {
            'x-csrf-token': $.cookie('csrfToken')
        },
        type: 'post',
        url: window.location.href + '/comment/thumbs', // href 提取优化
        data: {
            commentId: commentId
        },
        success: function (data) {
            if(data.success && data.status == 200) {
                if (data.data.status) {
                    that.find('.num').html(parseInt(that.find('.num').text()) + 1)
                } else {
                    that.find('.num').html(parseInt(that.find('.num').text()) - 1)
                }
                
            } else {
                if (data.status == 403) {
                    window.location.href = '/signin'
                } else {
                   alert(data.message)  
                }
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
})