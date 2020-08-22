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
