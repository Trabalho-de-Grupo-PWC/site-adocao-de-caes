$(document).ready(function () {
    // Adiciona um evento de clique aos botões de compra
$(".btn-outline-secondary").on("click", function () {
    // Obtém a quantidade selecionada
    var quantidade = $(this).prev(".form-group").find("select").val();

    // Exibe um alerta com a quantidade e uma mensagem de sucesso
    alert("Compra efetuada com sucesso! Quantidade: " + quantidade);
});

});