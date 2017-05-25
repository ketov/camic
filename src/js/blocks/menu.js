$(document).ready(function () {
    $('.submenu-1').on('click', function () {
        var el = $(this);
        var ul = $(this).children('.submenu-1-ul');
        if (el.hasClass('active')) {
            ul.slideUp(50);
            el.removeClass('active');
        } else {
            ul.slideDown(100);
            el.addClass('active');
        }
    });

    $('.submenu-2').on('click', function () {
        var el = $(this);
        var ul = $(this).children('.submenu-2-ul');
        if (el.hasClass('active')) {
            if (!$(event.target).closest(".submenu-2-ul").length) {
                ul.slideUp(50);
                el.removeClass('active');
                return false;
            }
        } else {
            ul.slideDown(100);
            el.addClass('active');
            return false;
        }
    });
});