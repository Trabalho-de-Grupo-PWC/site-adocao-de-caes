//Botões
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
let pet_redirects = document.getElementsByClassName('pet_redirect');
for (let i = 0; i < pet_redirects.length; i++) {
  pet_redirects[i].addEventListener('click', function () {
    window.location.href = './caesdisponiveis.html';
  });
}