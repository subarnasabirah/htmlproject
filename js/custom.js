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