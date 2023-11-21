const menuButton = document.querySelector('.navbar-toggler');
const menuOpened = document.querySelector('.navbar-collapse');
const menuAdjust = document.querySelector('.menuAdjust');
const slideImageDiv = document.querySelector('.carousel-item');
let x = 0;

$(document).ready(function () {
    function toggleMenu() {
        if ($(window).width() < 768) {
            menuOpened.style.transform = 'translateY(-72px)';
            $('.navbar-collapse').removeClass('show');
            let clicked = false;
            menuButton.addEventListener('click', function () {
                if (clicked == false) {
                    menuOpened.style.transform = 'translateY(-17px)';
                    menuAdjust.style.transform = 'translateX(-140%)';

                    $('.navbar-collapse').addClass('show');
                    clicked = true
                } else {
                    menuOpened.style.transform = 'translateY(-72px)';
                    menuAdjust.style.transform = 'translateX(0px)';
                    $('.navbar-collapse').removeClass('show');
                    clicked = false
                }
            });


        } else {
            menuOpened.style.transform = 'translateY(0px)';
            menuAdjust.style.transform = 'translateX(0px)';
        }
    }
    toggleMenu();

    $(window).resize(function () {
        toggleMenu();
    });
});
function redirectFunction(imagem) {
    let url;
    if (window.innerWidth < 768) {
        console.log('Olá ' + (x = x + 1));
        if (imagem == imagem1) {
            window.location.href = 'https://www.superpetclub.pt/racao-ownat-caes/7230-511-ownat-classic-complet.html?lighthousefeed_utm_source=GS+-+Google+Shopping+(Via+LighthouseFeed)&lighthousefeed_utm_medium=cpc&lighthousefeed_utm_term=PT7230v511&gad_source=1&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMpNHbqYuyLRRyKfy44PpltrO3yfymuVwh9z2QjugL7-YfUEWCyFrgQaAhNzEALw_wcB#/55-peso-20_kg';
        }
        if (imagem == imagem2) {
            window.location.href = 'https://www.continente.pt/produto/comida-humida-para-cao-adulto-vaca-e-figado-terrina-pedigree-2210312.html?lgw_code=15883-2210312&gad_source=1&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMqH-6sBxgJAUvpBy8D300bf9U4j8CD7fY1krSbit475i-wuhy9vVAkaAtLxEALw_wcB';
        }
        if (imagem == imagem3) {
            window.location.href = 'https://www.continente.pt/produto/racao-para-cao-adulto-mini-galinha-e-legumes-pedigree-6515248.html?lgw_code=15883-6515248&gad_source=1&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMpUpArm5kEt5b0jKc1C2jmc7VU0iAZjAxQgoDcDdxZfQuAd2l-0Um8aAtkuEALw_wcB';
        }
        
    }
}
let imagem1 = document.getElementById('racao1');
imagem1.addEventListener('click', function () { 
    redirectFunction(imagem1);
});
let imagem2 = document.getElementById('racao2');
imagem2.addEventListener('click', function () {
    redirectFunction(imagem2);
});
let imagem3 = document.getElementById('racao3');
imagem3.addEventListener('click', function () {
    redirectFunction(imagem3);
});

var SlideImage = slideImageDiv.querySelector('img');
var imagens = slideImageDiv.querySelectorAll('img');

