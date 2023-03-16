let pokemonRepository = (function(){

let pokemonList = [
{
     name: 'Bulbasaur', 
     type: 'grass'+'poison',
      height: 0.7,
},
{
  name: 'Charizard', 
  type: 'fire',
  height:1.6
},
{
  name: 'Pikachu',
  type: 'electric',
  height: 0.4
},

]

function getAll(){
  return pokemonList;
}
function add (pokemon){
  pokemonList.push(pokemon);
}
return{
  getAll: getAll,
  add: add
}

})()



//forEach loop
pokemonList.forEach(function(pokemon) {
  if (pokemon.height >=5) {
      document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that is a big Pokemon!!" + "<br>")
    } else if (pokemon.height >= 1.6 && pokemon.height < 5) {
      document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that is a medium Pokemon!" + "<br>")
    } else {
      document.write(pokemon.name + " (height: " + pokemon.height + "m) - That is a small pokemon!" + "<br>")
    }
  });
  
