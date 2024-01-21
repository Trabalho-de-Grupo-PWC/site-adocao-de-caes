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
                if ((dog.description).length > 45) {
                    var descricaoLimitada = (dog.description).substring(0, 45);
                    $(".descricao", card).text(descricaoLimitada);
                } else {
                    $(".descricao", card).text(dog.description);
                }
                    if (hasPhotos) {
                        $(".card-img-top", card).attr("src", dog.photos[0].full);
                    } else {
                        $(".card-img-top", card).attr("src", "https://iconape.com/wp-content/png_logo_vector/dog.png");
                    }
                $(".cao-idade", card).text(dog.age);
                $(".card-title", card).text(dog.name);
                $(".descricao", card).text(descricaoLimitada);
                $(".type-movie", card).text(dog.Type);
                $(".runtime-movie", card).text(dog.Runtime);
                var favBtn = $(".addFavorites", card);
                updateVisual(favBtn, dog);
                updateFavorites(favBtn, dog);
                $(".pets").append(card);
            });
        });
    });
    $(".addFavorites").on("click", function (event) {
        console.log("ooooooo");
        event.preventDefault();
        alert("Please");
    });
    function updateVisual(button, value) {
            if (isFavorite(value.id)) {
                button.css("color", "rgb(218, 218, 7)");
            } else {
                
                button.css("color", "grey");
            }
        
    }
    function isFavorite(id) {
        //A função parse é usada para converter uma string num objeto JSON
        var favorite = JSON.parse(localStorage.getItem("favoritos")) || [];
        return favorite.some(function (dog) {
        return dog.id === id;
        });
    }
    function updateFavorites(button, dog) {
        if (!button.hasClass("adicionado")) {
            button.addClass("adicionado");
            button.on("click", function () {
                if (isFavorite(dog.id)) {
                    removeFavorites(dog.id);
                } else {
                    addFavorites(dog);
                }
                updateVisual(button, dog);
            });
        }

    };
    function addFavorites(dog) {
        var favorites = JSON.parse(localStorage.getItem("favoritos")) || [];
        console.log(favorites);
        favorites.push(dog);
        localStorage.setItem("favoritos", JSON.stringify(favorites));
    }
    function removeFavorites(dogID) {
        var favorites = JSON.parse(localStorage.getItem("favoritos")) || [];
        favorites = favorites.filter(function (dog) {
            return dog.id !== dogID;
        });
        localStorage.setItem("favoritos", JSON.stringify(favorites));
    }

});

