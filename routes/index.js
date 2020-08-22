var express = require("express");
var router = express.Router();

const pokeService = require("../services/pokeapi");

/* GET home page. */
router.get("/", async function (req, res, next) {
  /* Esta es una forma de realizar una condicion corta,
   para este caso valido si existe  req.query.page en
  caso de ser cierto asigno esto a la variable, en caso contrario
  la inicializo en 0*/
  const page = req.query.page ? parseInt(req.query.page) : 0;
  
  /* Para realizar una paginacion solo debo obtener la pagina en la que me encuentro y sumar o restar
  ya que page siempre va a iniciar en 0 no tengo problemas en sumarle 1 para next, para prev debo estar seguro que page no se
  igual a 0 ya que no queremos numero negativos
  */
  
  let nextPage = page + 1;
  let prevPage = page === 0 ? 0 : page - 1;


  /* Para la paginacion yo le indique a mi servicio que por defecto me muestre los pokemones de 20 en 20 empezando de 0,
  para poder obtener los pokemones de la siguiente pagina debo multiplicar la pagina en la que me encuentro por 20 y asignarlo al offset
  */
  let pagination = page * 20;

  /* Por que usar async/await? ya que desconocemos el tiempo que le puede tomar al
  servidor realizar la consulta ya sea obtener los datos o 
  procesarlos, le indicamos con async/await que se 'tome su tiempo' y 
  cuando tenga la respuesta continue su proceso */

  /* Obtengo todos los pokemones */
  
  let pokemonList = await pokeService.getPokemons(limit=20,offset=pagination);

  /* En la respuesta me indica que la lista con todos los pokemones se encuentra en el atributo 'results' */
  pokemonList = pokemonList.results;

  res.render("index", {
    title: "Express",
    pokemonList,
    nextPage,
    prevPage,
  });
});

module.exports = router;
