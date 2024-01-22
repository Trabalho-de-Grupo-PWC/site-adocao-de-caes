var cloneCard = $(".card-pet").clone();
$(document).ready(function () {
    var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    console.log(favoritos);
    favoritos.forEach(function (favorito) {
        var card = cloneCard.clone();
        var hasPhotos = favorito.photos && favorito.photos.length > 0;
        var descricaoLimitada = "";
        if (favorito.description) {
            if (favorito.description.length > 75) {
                descricaoLimitada = (favorito.description).substring(0, 72) + "...";
                $(".descricao", card).text(descricaoLimitada);
            } else {
                $(".descricao", card).text(favorito.description);
            }
        }
        if (hasPhotos) {
            $(".card-img-top", card).attr("src", favorito.photos[0].full);
        } else {
            $(".card-img-top", card).attr("src", "https://iconape.com/wp-content/png_logo_vector/dog.png");
        }
        $(".cao-idade", card).text(favorito.age);
        $(".card-title", card).text(favorito.name);
        $(".descricao", card).text(descricaoLimitada);
        $(".type-movie", card).text(favorito.Type);
        $(".runtime-movie", card).text(favorito.Runtime);
        var favBtn = $(".addFavorites", card);
        var btnVer = $(".btnVer", card);
        updateVisual(favBtn, favorito);
        updateFavorites(favBtn, favorito);
        verDados(btnVer, favorito);
        $(".pets").append(card);
    });

    $(".addFavorites").on("click", function (event) {
        event.preventDefault();
    });
    
    function updateVisual(button, value) {
        if (isFavorite(value.id)) {
            button.css("color", "rgb(218, 218, 7)");
            button.addClass("favorito");
        } else {
            button.css("color", "grey");
            button.removeClass("favorito");
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
                location.reload();
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
            console.log(pet);
            var guardarpet = JSON.parse(localStorage.getItem("petAtual")) || [];
            guardarpet = [pet];
            localStorage.setItem("petAtual", JSON.stringify(guardarpet));
        });
    }
});

