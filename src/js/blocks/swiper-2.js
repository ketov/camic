$(document).ready(function () {
    var swiper = new Swiper('.slide-2', {
        slidesPerView: 5,
        paginationClickable: true,
        nextButton: '.swiper-2-button-next',
        prevButton: '.swiper-2-button-prev',
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
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
    
    //$("[data-fancybox]").fancybox({
		// Options will go here
	//});
    
    $(".swiper-2").fancybox({
        'showNavArrows' : true,
        //afterLoad: function () {},
        /*helpers: {
            title: {
                type: 'inside'
            },
            /*overlay: {
                css: {
                    'background': 'rgba(0, 0, 0, 0.7)'
                }
            }
        },*/
        //buttons : true,
        /*beforeShow: function () {
            $.extend(this, {
                tpl: {
                    //closeBtn: '<div class="popup-description__close-container"><div class="popup-description__close-img popup-description__close-img--normal"></div><div class="popup-description__close-img popup-description__close-img--hover"></div></div>',
                    next: 'asdfasdfasdf',
                    prev: 'uityuityu'
                }
            });
        }*/
    });
});