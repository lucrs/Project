/**
 * Created by lucas on 18/08/2017.
 */
function main() {

    (function () {
        'use strict';
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 650;
            if ($(window).scrollTop() > navHeight) {
                $('.navigation').addClass('on');
            } else {
                $('.navigation').removeClass('on');
            }
        });
    }());
}
main();