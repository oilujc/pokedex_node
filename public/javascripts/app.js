const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

$(".list-item").click(function (event) {
  let url = $(this).data("url");
  console.log(url);

  $.ajax({
    type: "get",
    url: url,
    dataType: "json",
    success: function (response) {
      console.log(response);

      /* Al obtener los datos tengo que remover la clase hide para que nuestros elementos sean visibles */
      $(".main-screen").removeClass("hide");

      /* Agrego y reemplazo cada atributo de cada pokemon */
      $(".poke-name").html(response.name);
      $(".poke-id").html(response.id);
      $(".poke-front-image").attr("src", response.sprites.front_default);
      $(".poke-back-image").attr("src", response.sprites.back_default);
    },
  });
});

function init(url) {
  fetch(url)
    .then((result) => result.json())
    .then((json) => {
      console.log(json);

      // Recorrer la lista de pokemones para luego renderizar en el html

      json.results.forEach((element) => {
        $(".right-container__screen").append(`
        <div data-url="${element.url}" class="list-item">${element.name}</div>
        `);
      });
    });
}

init(url);
