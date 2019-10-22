$(document).ready(function () {
    'use strict';

    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));

    // Featured Work Shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css("opacity", "1");
        } else {
            $('.shuffle-images .col-md').css("opacity", ".08");
            $($(this).data('class')).parent().css("opacity", "1");
        }
    });

    // Nice Scroll
    $("body").niceScroll({
      cursorcolor:"#08526d",
      cursorwidth:"18px",
      zindex: "99999",
      cursorborder: "1px solid #08526d",
      cursorborderradius: "0px"
    });

    var scrollButton =$("#scroll-top");

    $(window).scroll(function () {

        $(this).scrollTop() >= 600 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Button To Scroll Top
    scrollButton.click(function () {

        $('html,body').animate({scrollTop : 0}, 600);
    });


});
