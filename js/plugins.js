// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

(function($) {

    var $window = $(window),
        $html = $('.wrap');

    $window.resize(function resize(){
        if ($window.width() < 960) {
            return $html.addClass('is-not-expanded').removeClass('is-expanded');
        }

        $html.removeClass('is-not-expanded').addClass('is-expanded');
    }).trigger('resize');

$('.nav-toggle').click(function(){
    var wrapHasExpandedClass = $('.wrap').hasClass('is-expanded');
    var wrapHasNotExpandedClass = $('.wrap').hasClass('is-not-expanded');

    if(wrapHasExpandedClass){
         $('.wrap').addClass('is-not-expanded');
         $('.wrap').removeClass('is-expanded');
    }

    if(wrapHasNotExpandedClass){
         $('.wrap').addClass('is-expanded');
         $('.wrap').removeClass('is-not-expanded');
    }
});

})( jQuery );
