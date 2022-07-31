/*global $,alert,promt*/

$(document).ready(function() {


    /*
    * Adding Navbar Active
    ==================================================*/

    $(window).scroll(function() {
        if (($(window).scrollTop() > 100)) {
            $('.header').addClass('header-color');
        } else {
            $('.header').removeClass('header-color');
        }

    });

    /*
    * navbar scalable Size
    ===============================================*/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $('.navbar').addClass('navbar-scalable-size');
        } else {
            $('.navbar').removeClass('navbar-scalable-size');
        }
    });
    /*
     * Async Navbar Link
     * =====================================*/



    $(window).scroll(function() {

        $('.block').each(function() {

            if ($(window).scrollTop() > $(this).offset().top) {

                var blockId = $(this).attr('id');

                $('.header .navbar-inner li a').removeClass('active');

                $('.header .navbar-inner li a[data-scroll="' + blockId + '"]').addClass('active');
            }
        })
    })

    /*
     * Counter Plugin
     * ========================================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* MixItUp
     * ========================================================*/
    var mixer = new mixitup('#mixItUp');


    /*
     * Adding Class Active
     * =========================================================*/
    /* --- Header Navbar ----*/
    $('.header .navbar-inner li a').on('click', function(e) {

        e.preventDefault();

        $(this).parents().siblings().children().removeClass('active');

        $(this).addClass('active');

        /* ---- Move To Link Section ----*/

        $('html,body').animate({

            scrollTop: $('.' + $(this).data('scroll')).offset().top + 1

        }, 500);
    });
    /* -- Scroll  To Bottom ---*/

    $('.background-carousel .content .scroll-to-bottom').click(function() {

        $('html,body').animate({
            scrollTop: $('.about-section').offset().top + 1
        }, 500);
    });

    /* -- Scroll  To Contact Form  ---*/

    $('.about-section .about-section-content .about-section-contact a:last-child').click(function() {

        $('html,body').animate({
            scrollTop: $('.contact-section').offset().top + 1
        }, 500);
    });


    /*--- Section Work --*/
    $('.controls a').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    /* --- Download App ------ */

    $('.download-section .button').on('click', function() {

        $('.download-section').toggleClass('download-section-class');

        $('.download-section .button i').toggleClass('fa-close');

        $('.download-section .button i').toggleClass('fa-bars');
        $(this).toggleClass('button-class');
    });

    /*
     * Add PopUp Image
     * ===========================================================*/
    $('.work-section .work-gallery-image .image-details i:first-child').on('click', function() {

        var image_source = $(this).data('content');

        $('.popup .image-popup img').attr('src', image_source);

        $('.popup').css({
            transform: 'scale(1)',
        })
    });

    $('.popup i').on('click', function() {

        $('.popup').css({
            transition: 'transform .2s',
            transform: 'scale(0)',
        })
    });

    $('.popup .overlay').on('click', function() {
        $('.popup').css({
            transition: 'transform .2s',
            transform: 'scale(0)',
        })
    });

    /*
     * Scroll Top Event
     * ========================================================*/
    $('.scroll-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {

            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    })
    $('.scroll-top').on('click', function() {
            $('html,body').animate({
                scrollTop: 0
            }, 600)
        })
        /*
         * Wow Function
         * =====================================*/
    new WOW().init();
});

/*
 * Typed Section Function
 * ========================================*/

$('.type').typed({
    strings: [
        "Devops Engineer",
        "Full Stack Developer",
        "Faculty Of Compute Science",
        "Zagazig University"
    ],
    typeSpeed: 70,
    backDelay: 200,
    loop: true
})


/*
 * Loading Page Section
 * ==================================================*/
window.onload = function() {
    $('.loading-page').fadeOut();
    $('body').css({
        overflow: "visible"
    })
}