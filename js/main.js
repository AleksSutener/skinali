$(function() {

    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'С скинали'
    });

    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });

    $('.reviews-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        dots: true,
        arrows: false,
        centerMode: true,
        dotsClass: 'reviews-slider__dots',
        responsive: [
            {
                breakpoint: 991,
                settings: 'unslick'
            }
        ]
    })

    $('.menu-btn').click(function() {
        $('.menu').toggleClass('menu_active');
        $('.menu-btn__line:nth-child(1)').toggleClass('first');
        $('.menu-btn__line:nth-child(2)').toggleClass('middle');
        $('.menu-btn__line:nth-child(3)').toggleClass('last');
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top-100+"px"});
        return false;
    });

    $('[type="tel"]').mask('+7 (999) 999-99-99');
});