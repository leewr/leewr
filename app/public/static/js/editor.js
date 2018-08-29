seajs.config({
    alias: {
        wangeditor: 'wangeditor',
        jquery: 'jquery'
    }
}).use(['jquery', 'wangeditor.min', 'highlight/highlight.pack'], function() {
	
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

