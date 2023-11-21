const menuButton = document.querySelector('.navbar-toggler');
const menuOpened = document.querySelector('.navbar-collapse');
const menuAdjust = document.querySelector('.menuAdjust');
const slide = document.querySelector('.carousel-item');
$(document).ready(function () {
    function toggleMenu() {
        if ($(window).width() < 768) {
            menuOpened.style.transform = 'translateY(-72px)';
            $('.navbar-collapse').removeClass('show');
            let clicked = false;
            menuButton.addEventListener('click', function() {
                if (clicked == false) {
                    menuOpened.style.transform = 'translateY(-17px)';
                    menuAdjust.style.transform = 'translateX(-140%)';
                    
                    $('.navbar-collapse').addClass('show');
                    clicked = true
                }else{
                    menuOpened.style.transform = 'translateY(-72px)';
                    menuAdjust.style.transform = 'translateX(0px)';
                    $('.navbar-collapse').removeClass('show');
                    clicked = false
                }
            });
            slide.addEventListener('click', function() {
                Window.location.href = 'https://www.google.com.br';
            });
        }else{
            menuOpened.style.transform = 'translateY(0px)';
            menuAdjust.style.transform = 'translateX(0px)';
        }
    }
    toggleMenu();
    
    $(window).resize(function () {
        toggleMenu();
    });
});
