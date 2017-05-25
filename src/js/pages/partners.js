$(document).ready(function () {
    $('.partner').on('click', function () {
        var top = $(window).scrollTop() + 40;
        $('.partner-popup').css({'top': top});
        $('.black-bg').fadeIn(400);
        setTimeout(function () {
            $('.partner-popup').fadeIn(400);
        }, 480);
        return false;
    });

    $('.close-parnters').on('click', function () {
        $('.partner-popup').fadeOut(400);
        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 480);
    });
});