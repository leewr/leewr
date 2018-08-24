seajs.config({
	base: '/public/static/js',
    alias: {
        jquery: 'plugin/jquery'
    }
}).use(['jquery', 'one/common/Tab'], function() {
	$('.ui-tab-tabs > .ui-tab-tab').tab()
});