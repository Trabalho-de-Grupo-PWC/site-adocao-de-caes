var cloneCard = $(".card-pet").clone();
$(document).ready(function () {
    const petfinderApiUrl = "https://api.petfinder.com/v2/oauth2/token";
    $.ajax({
        url: petfinderApiUrl,
        method: "POST",
        data: {
            grant_type: 'client_credentials',
            client_id: 'NCnuxZRejKZbJOIlcY7Zfc37XDJLKd67XSenJ7sGFtdk7kqNtv',
            client_secret: 'qQ8vgYrB9ps0XQvDWRrmuSQETLfJQZxYDnZ5jTnx'
        }
    }).done(function (tokenData) {
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
                var descricaoLimitada ="";
                if (dog.description) {
                    if (dog.description.length > 75) {
                        descricaoLimitada = (dog.description).substring(0, 72) + "...";
                        $(".descricao", card).text(descricaoLimitada);
                    } else {
                        $(".descricao", card).text(dog.description);
                    }
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
                var btnVer = $(".btnVer", card);
                updateVisual(favBtn, dog);
                updateFavorites(favBtn, dog);
                verDados(btnVer, dog);

                $(".pets").append(card);
            });
        });
    });
    $(".addFavorites").on("click", function (event) {
        event.preventDefault();
    });
    $(".btnVer").on("click", function (event) {
        event.preventDefault();
    });
    function updateVisual(button, value) {
            if (isFavorite(value.id)) {
                button.css("color", "rgb(218, 218, 7)");
                button.addClass("favorito");
            } else {
                button.removeClass("favorito");
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
                    button.removeClass("favorito");
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

    function verDados(button, pet) {
        button.on("click", function () {
            var guardarpet = JSON.parse(localStorage.getItem("petAtual")) || [];
            guardarpet = [pet];
            localStorage.setItem("petAtual", JSON.stringify(guardarpet));
        });
    }
});

