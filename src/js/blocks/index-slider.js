$(document).ready(function () {
    var swiper = new Swiper('.index-slider__container', {
        //pagination: '.swiper-pagination',
        slidesPerView: 4,
        //pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.index-slider__next',
        prevButton: '.index-slider__prev',
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        loop: true,
        breakpoints: {
            1190: {
                slidesPerView: 3
            },
            1110: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 1
            }
        }
    });
});