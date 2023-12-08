$(document).ready(function () {
    const petfinderApiUrl = "https://api.petfinder.com/v2/oauth2/token";
        $(".lista-filmes").empty();
        var inputsearch = $("#input-search").val();
        $(".search-title").text("Pesquisa: " + inputsearch);
        // Chama a API do Petfinder para obter o token de acesso

        $.ajax({
            url: petfinderApiUrl,
            method: "POST",
            data: {
                grant_type: 'client_credentials',
                client_id: 'NCnuxZRejKZbJOIlcY7Zfc37XDJLKd67XSenJ7sGFtdk7kqNtv',
                client_secret: 'qQ8vgYrB9ps0XQvDWRrmuSQETLfJQZxYDnZ5jTnx'
            }
        }).done(function (tokenData) {
            // Use o token obtido para fazer chamadas à API do Petfinder.
            $.ajax({
                url: "https://api.petfinder.com/v2/animals?type=dog",
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + tokenData.access_token
                }
            }).done(function (data) {
                console.log(data);
            });
        });
    $(".add-Fav").on("click", function (event) {
        event.preventDefault();
        alert("Please");
    });

});
