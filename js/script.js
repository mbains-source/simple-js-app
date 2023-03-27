let pokemonRepository = (function(){
let pokemonList = [];
let apiUrl='https://pokeapi.co/api/v2/pokemon/?limit=150';

function add (pokemon) {
  if (
    typeof pokemon === 'object' &&
    'name' in pokemon 
  ) {
    pokemonList.push(pokemon);
  }else {
    console.log('pokemon is not correct');
  } 
}

function getAll() {
  return pokemonList;
}

//forEach loop 
function addListItem(pokemon) {
  //Functions & Selctors
  let pokedexList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  //Buttons
  button.innerText = pokemon.name;
  button.classList.add('pokemon-name-list');
  listItem.appendChild(button);
  pokedexList.appendChild(listItem);
  button.addEventListener('click', 
  function(event){
  showDetails(pokemon);
  });
}

//LoadList & Load Details
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);

    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Adding item details
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

//Function showdetails + Modal

function showDetails(pokemon) {
  pokemonReposityory.loadDetails(item).then(function () {
    let modalContainer = document.querySelector ('#modal-container');

    modalContainer.innerHTML = '';
 
    let modal = document.createElement('div');
    modal.classList.add ('modal');
 
    let sprite = document.createElement('img');
    sprite.classList.add('sprite');
    sprite.src = item.imageUrl;
 
    let closeButtonElement = document.createElement('button');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal)
 
    let titleElement = document.createElement ('h1');
    titleElement.innerText =  (item.name);
 
    let contentElement = document.createElement ('p');
 
    let pokemonTypes = "";
 
      // for loop used to iterate through the item.types 
      for (let i = 0; i < item.types.length; i++) {
       //name of the current type is concatenated to the typeNames variable (appending to the end of the string)
       pokemonTypes += item.types[i].type.name;
       //CONDITION: if i < - 1, a comma and space added to typeNames  
       if (i < item.types.length - 1) {
           pokemonTypes += ", ";
       }
   }
 
   // value of typeNames is then assigned to the innertext property of contentElement.
   contentElement.innerText =('Height: ' + item.height + '\n' +  '\n' + 'Types: ' + pokemonTypes);
 
 
   modal.appendChild (closeButtonElement);
   modal.appendChild (titleElement);
   modal.appendChild (contentElement);
   modalContainer.appendChild (modal);
   modal.appendChild (sprite);
 
 
   modalContainer.classList.add('is-visible');
 
 
 function hideModal (){
   modalContainer.classList.remove ('is-visible');
 }
 
 window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
     hideModal();
   }
 });
 
 modalContainer.addEventListener('click', (e) => {
 let target = e.target;
 if (target === modalContainer) {
   hideModal();
 }
 });
 
 document.querySelector ('button.button-class').addEventListener('click', () => {
   showDetails ('Modal Title', 'Modal Content');
 });
   });
 }
  });


return {
  add: add,
  getAll: getAll,
  loadList: loadList,
  loadDetails: loadDetails
};


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
    });

 
});






