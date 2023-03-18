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



//forEach loop revised to include DOM Functionality
function addListItem(pokemon) {
  let pokedexList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.pokemonName;
  button.classList.add('pokemon-name-list');
  listItem.appendChild(button);
  pokedexList.appendChild(listItem);
  button.addEventListener('click', showDetails)
}

function showDetails(pokemon) {
  console.log(pokemon.pokemonName);
}
  ;
  
