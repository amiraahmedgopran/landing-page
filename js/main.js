$(document).ready(function(){

    //toggle class in header
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 1,
        headerEl = document.getElementById('bottom-nav');
  
        if (distanceY > shrinkOn) {
          headerEl.classList.add("scroll-navbar");
        } else {
          headerEl.classList.remove("scroll-navbar");
        }
      }
      window.addEventListener('scroll', resizeHeaderOnScroll);
  
      



    $('.search').click(function(){
        $('.search-area').addClass('open');
        $('.overlay').addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $('.colse').click(function() {
        $('.search-area').removeClass('open');
        $('.overlay').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    $('.play').click(function(){
        $('.video-section .video-cover').css('display', 'none');
        $('.video-section iframe').css('display', 'block');
    });

    $('.bars').click(function() {
        $('.bar').toggleClass('open');
        $('header .top-nav .top-nav-list').toggleClass('open');
    });

    $('.dropdown-link').click(function() {
        $(this).toggleClass('open');
        $('.bottom-nav .bottom-nav-list').toggleClass('open');
    });
});