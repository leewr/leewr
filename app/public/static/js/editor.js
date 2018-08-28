seajs.config({
    alias: {
        wangeditor: 'wangeditor'
    }
}).use(['wangeditor.min', 'highlight/highlight.pack'], function() {
	
    if ($('#editor').length) {
        var E = window.wangEditor
        var editor = new E('#toolbar', '#editor')
    
        editor.customConfig.onchange = function () {
            $('input[name="content"]').val(editor.txt.html())
            $('input[name="summary"]').val(editor.txt.text().substr(0, 20))
        }
        editor.create()
        editor.txt.html($('input[name="content"]').val())
    }
	

   

    
});

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
                        // that.html('关注')
                    } else {
                        that.addClass('liked')
                    }
                } else {

                }
            },
            error: function (err) {
                console.log(err)
            }
        })
    })