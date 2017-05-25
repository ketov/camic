'use strict'


function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

$(document).ready(function () {

    $('.login').on('click', function () {
        var top = $(window).scrollTop() + 140;
        $('.login-popup').css({'top': top});
        $('.black-bg').fadeIn(400);
        setTimeout(function () {
            $('.login-popup').fadeIn(400);
        }, 480);
        return false;
    });

    $('.login-popup__close').on('click', function () {
        $('.login-popup').fadeOut(400);
        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 480);
    });
    
    

    $('.blue-block__button').on('click', function () {
        var el = $(this);
        var show = el.parent('.text').children('.hidden');
        if (show.length > 0) {
            if (el.hasClass('button--active')) {
                show.slideUp(200);
                el.removeClass('button--active');
                el.text('Continua a leggere');


            } else {
                show.slideDown(200);
                el.addClass('button--active');
                el.text('Chiudi');
            }
        }
    });

    $('.search-white').on('click', function () {
        var el = $(this);
        var input = el.siblings('form').children('input');
        if (input.hasClass('active')) {
            input.removeClass('active');
        } else {
            input.addClass('active');
        }
    });

    function circle() {
        var height = $('.circle').width();
        $('.circle').each(function () {
            $(this).css({'height': height});
        });
    }

    function circle2() {
        var height = $('.circle-2').width();
        $('.circle-2').each(function () {
            $(this).css({'height': height});
        });
    }

    circle();
    circle2();
    $(window).resize(function () {
        circle();
        circle2();
    });

    //var api = element.data('jsp');

    var body = $('body'),
            timer,
            windowHeight = $(window).height(),
            windowWidth = $(window).width()

//Задаем размеры блокам
    var setHeight = function () {

    }
    setHeight();

    $(window).bind('resize', function () {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        setHeight();
    });

    $(window).bind('scroll', function () {

        //отключаем ховер при скроле
        clearTimeout(timer);
        if (!body.hasClass('disable-scroll-hover')) {
            body.addClass('disable-scroll-hover')
        }
        timer = setTimeout(function () {
            body.removeClass('disable-scroll-hover')
        }, 200);

    });
    try {
        Typekit.load({async: true});
    } catch (e) {
    }
});