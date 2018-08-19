seajs.config({
    alias: {
        jquery: 'jquery',
        wangeditor: 'wangeditor'
    }
}).use(['wangeditor.min', 'jquery'], function() {
	var E = window.wangEditor
	var editor = new E('#toolbar', '#editor')
	editor.create()
	$('#editor').click(function () {
		$('input[name="content"]').val(editor.txt.html())
	})
});