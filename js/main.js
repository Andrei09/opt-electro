$(document).ready(function(){
    var nav = $('.site-nav');
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 30) {
            $('nav').addClass('fixed');
            nav.css('margin-left','-15px');
            $('.menu').css('max-width','1170px');
        } else {
            $('nav').removeClass('fixed');
            $('.site-nav').css('margin-left','-30px');
            $('.menu').css('max-width','auto');
        }
    });
    $(".menu-bar").click(function(){nav.animate({right: "0"});
    });
    $(".close").click(function(){
        nav.animate({right: "-100vw"})
    });
    nav.on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 60;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
