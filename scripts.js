$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    AOS.init();

    var backToTopBtn = $('#back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });
    backToTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.carousel img').click(function () {
        var src = $(this).attr('src');
        $('#modal-img').attr('src', src);
        $('#modal').fadeIn();
    });

    $('.close, #modal').click(function () {
        $('#modal').fadeOut();
    });

    var countdownDate = new Date("Jun 30, 2024 00:00:00").getTime();
    var countdownFunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
        if (distance < 0) {
            clearInterval(countdownFunction);
            $('#timer').html("EXPIRED");
        }
    }, 1000);

    // Parallax effect for hero section
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('#hero').css('background-position', 'center ' + (scrollTop * 0.5) + 'px');
    });

    // Scroll animations for sections
    $('.section').each(function () {
        var section = $(this);
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var offsetTop = section.offset().top - $(window).height() / 2;
            if (scrollTop > offsetTop) {
                section.addClass('visible');
            }
        });
    });
});