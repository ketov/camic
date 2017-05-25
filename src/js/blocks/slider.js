$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        //pagination: '.swiper-pagination',
        slidesPerView: 4,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
        //spaceBetween: 30
    });
});