
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
