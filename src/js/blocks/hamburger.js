$(document).ready(function () {
    $('#hamburger').on('click', function(){
        $('.menu__menu').addClass('clicked');
        var el = $(this);
        if(el.hasClass('active')){
            el.removeClass('active');
            $('.menu__menu').stop(true, true).fadeOut(300);
        }
        else{
            el.addClass('active');
            $('.menu__menu').stop(true, true).fadeIn(300);
        }
    });
});