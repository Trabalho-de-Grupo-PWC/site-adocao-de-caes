$(document).ready(function () {
    // Obtém os dados do localStorage
    var dados = JSON.parse(localStorage.getItem("petAtual")) || [];

    // Obtém a tabela
    var table1 = $("#dadosTable tbody");

    // Preenche a tabela com os dados
    dados.forEach(function (pet) {
        var hasPhotos = pet.photos && pet.photos.length > 0;
                    if (hasPhotos) {
                        $(".card-img-top").attr("src", pet.photos[0].full);
                    } else {
                        $(".card-img-top").attr("src", "https://iconape.com/wp-content/png_logo_vector/dog.png");
                    }
                $(".cao-idade").text(pet.age);
                $(".card-title").text(pet.name);
                $(".descricao").text(pet.description);
                $(".type-movie").text(pet.Type);
                $(".runtime-movie").text(pet.Runtime);

        var row = $("<tr>");
        row.append($("<td>").html("<strong>Dados do cão</strong>"));
        row.append($("<td>").text(pet.id));
        row.append($("<td>").text(pet.name));
        row.append($("<td>").text(pet.age));
        row.append($("<td>").text(pet.colors.primary));
        row.append($("<td>").text(pet.size));
        row.append($("<td>").text(pet.organization_id));
        // Adicione mais colunas conforme necessário
        table1.append(row);
    });
});
