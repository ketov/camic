$(document).ready(function () {
$(function () {
        $('.event-col').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    });
    
    $('.associate__block').on('click', function () {
        var top = $(window).scrollTop() + 40;
        $('.associate-popup').css({'top': top});
        $('.black-bg').fadeIn(400);
        setTimeout(function () {
            $('.associate-popup').fadeIn(400);
        }, 480);
        return false;
    });

    $('.close-associate').on('click', function () {
        $('.associate-popup').fadeOut(400);
        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 480);
    });
});