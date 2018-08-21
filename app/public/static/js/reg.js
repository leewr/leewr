seajs.config({
    alias: {
        jquery: 'jquery'
    }
}).use(['jquery'], function() {
    $('.inputBox input').on('focus', function () {
        $('.errorMsg').hide()
    })
});