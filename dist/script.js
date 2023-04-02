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

//forEach loop (JQUERY + BOOTSTRAP)
function addListItem(pokemon) {
  //Functions & Selctors
  let pokedexList = document.querySelector('.list-group');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  //Buttons
  button.innerText = pokemon.name;
  button.classList.add('btn-primary');
  button.classList.add('pokemon-button');
  button.setAttribute ('date-toggle','modal');
  button.setAttribute ('date-target','#examplemodal');
  listItem.appendChild(button);
  pokemonListFolder.appendChild(listItem);
  button.addEventListener('click', function () {
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


//Function showdetails + Bootstrap Modal

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}
function showModal(pokemon) {
  let modalContainer = $('#modal-container')
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');

  modalTitle.empty();
  modalBody.empty();

  let pokemonName = $('<h1>' + pokemon.name + '</h1>')
  let closeButton = document.createElement('button');
  closeButton.on('click', hideModal)
  let pokemonImage = $('<img class="modal-img" style="width:50%">');
  pokemonImage.attr('src', pokemon.imageUrl);
  let pokemonHeight = $('<p>' + 'Height : ' + pokemon.height + '</p>');
  modalBody.appendChild(closeButton)
  modalBody.append(pokemonName);
  modalBody.append(pokemonImage);
  modalBody.append(pokemonHeight);
  modalBody.addClass("show")
  modalBody.html(modalBody);
}
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('show');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});
 
      // for loop used to iterate through the item.types 
      //for (let i = 0; i < item.types.length; i++) {
       //name of the current type is concatenated to the typeNames variable (appending to the end of the string)
       //pokemonTypes += item.types[i].type.name;
       //CONDITION: if i < - 1, a comma and space added to typeNames  
       //if (i < item.types.length - 1) {
       //    pokemonTypes += ", ";
      // }
   //}
 
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

return {
  add: add,
  getAll: getAll,
  loadList: loadList,
  loadDetails: loadDetails
  addListItem
};
 

  })();

pokemonRepository.loadList()
  .then(()=> {
    pokemonRepository.getAll().forEach(pokemon => pokemonRepository.addListItem(pokemon))
})








