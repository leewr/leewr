seajs.config({
    alias: {
        jquery: 'jquery',
        wangeditor: 'wangeditor'
    }
}).use(['wangeditor.min', 'jquery'], function() {
	var E = window.wangEditor
	var editor = new E('#toolbar', '#editor')
	
	editor.customConfig.onchange = function () {
        $('input[name="content"]').val(editor.txt.html())
        $('input[name="summary"]').val(editor.txt.text().substr(0, 20))
    }
    editor.create()
});