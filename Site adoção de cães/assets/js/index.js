const menuButton = document.querySelector('.navbar-toggler');
const menuOpened = document.querySelector('.navbar-collapse');
const menuAdjust = document.querySelector('.menuAdjust');
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
        }
    }
    toggleMenu();

    $(window).resize(function () {
        toggleMenu();
    });
});