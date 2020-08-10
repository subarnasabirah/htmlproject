$(window).scroll(function(){
    $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(window).scroll(function(){
    $('.navbar-nav li').toggleClass('scrolled', $(this).scrollTop() > 100);
});


var loader = document.getElementById('preloader');
function myFunction(){
    loader.style.display = 'none';

}

$('.dot-list').owlCarousel({
    loop:true,
    margin: 30,                              
    nav:false,
    autoplayHoverPause:true,
    dots: true,
    autoplay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



