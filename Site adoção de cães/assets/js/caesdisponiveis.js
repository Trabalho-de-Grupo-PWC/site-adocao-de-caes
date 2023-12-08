var cloneCard = $(".card-pet").clone();

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

            $.each(data.animals, function (index, dog) {
                var card = cloneCard.clone();
                var hasPhotos = dog.photos && dog.photos.length > 0;
                
                    if (hasPhotos) {
                        $(".card-img-top", card).attr("src", dog.photos[0].full);
                    } else {
                        $(".card-img-top", card).attr("src", "https://banner2.cleanpng.com/20180413/kie/kisspng-dog-computer-icons-pet-hop-5ad07f5a74e721.9363762815236135304788.jpg");
                    }
                $(".cao-idade", card).text(dog.age);
                $(".card-title", card).text(dog.name);
                $(".type-movie", card).text(dog.Type);
                $(".runtime-movie", card).text(dog.Runtime);

                //Button dos favoritos
                /*var favBtn = $(".add-Fav", card);
                updateVisual(favBtn, value);
                updateFavorites(favBtn, value);
                */
                $(".pets").append(card);
            });
        });
    });
    $(".add-Fav").on("click", function (event) {
        event.preventDefault();
        alert("Please");
    });

});

