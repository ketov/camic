$(document).ready(function () {
    $('.member-to-member-button').on('click', function () {
        var top = $(window).scrollTop() + 40;
        $('.member-to-member-popup').css({'top': top});
        $('.black-bg').fadeIn(400);
        setTimeout(function () {
            $('.member-to-member-popup').fadeIn(400);
        }, 480);
        return false;
    });

    $('.close-member-to-member').on('click', function () {
        $('.member-to-member-popup').fadeOut(400);
        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 480);
    });
});