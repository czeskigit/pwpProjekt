$(function () {
    
    if (window.innerWidth > 960){
        $('nav').removeAttr('style');
    }
    
    //page on load animation
    $('body').fadeIn(2000, function () {
        $('#hero-quick-contact-box').fadeIn(1000);
    });
    //function for smooth scrolling for links in nav
    function linkSmoothScroll(event) {

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }


    };

    //smooth scrolling function for logo, scroll to the top of the page.
    function imgSmoothScroll() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    };
    
    var imagePosition = 0;
    var respoImgaePosition = 0;
    var lastScrollPos = 0;
    //function for background image move
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;

        imagePosition = scrollPosition / 2 - 650;
        respoImgaePosition = scrollPosition / 8 - 200;
        
        if (windowWidth < 576) {
            $('#desk-image').css('background-position', '0px ' + respoImgaePosition + 'px');    
        } else {
            $('#desk-image').css('background-position', '0px ' + imagePosition + 'px');    
        }

        $('.prac-box').each(showElement);
        $('#mediations-box > p').each(showElement);

        if (windowWidth <= 960) {
            if (scrollPosition > lastScrollPos) {
                $('nav').slideDown(300);
            } else {
                $('nav').slideUp(300);
            }
            lastScrollPos = scrollPosition;
        } else {
            $('nav').slideDown(300);
        }

    });

    function showElement(i) {
        var objTop = $(this).offset().top + 100;
        var winBottom = $(window).scrollTop() + $(window).height();

        if (winBottom > objTop) {
            $(this).animate({
                'opacity': '1'
            }, 500);
        }
    }

    //assignments
    $('a').on('click', linkSmoothScroll);
    $('#nav-logo').on('click', imgSmoothScroll);
});
