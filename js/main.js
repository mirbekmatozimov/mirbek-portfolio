$(function(){
    $('.main__slider').slick({
        arrows: false,
        infinte: false,
        asNavFor: ".main__aside-ul",
        draggable: false,
        fade: true,
        waitForAnimate: false,
        swipe: false,
    })
    $('.main__aside-ul').slick({
        arrows: false,
        infinte: false,
        asNavFor: ".main__slider",
        vertical: true,
        slidesToShow: 5,
        focusOnSelect: true,
    })
    $('.about__slider').slick({
        infinite: false,
        slidesToShow: 2,
        prevArrow: '<div class="slick-btn slick-prev"><img src="img/left.svg"></div>',
        nextArrow: '<div class="slick-btn slick-next"><img src="img/right.svg"></div>',
    })
    $('.serv__slider').slick({
        infinite: false,
        slidesToShow: 2,
        prevArrow: '<div class="slick-btn slick-prev"><img src="img/left.svg"></div>',
        nextArrow: '<div class="slick-btn slick-next"><img src="img/right.svg"></div>',
        responsive: [{
            breakpoint: 840,
            settings: "unslick"
        }
        ]
    })
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

        if ($(window).width() <= '870') {
            $('.main__aside-ul').on('click', 'a', function () {
                $('#check').trigger('click')
            });
        }
        $('#form-btn').on('click', function(){
            $(this).html('Отправлено')
        });
});
