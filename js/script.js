let pokemonList = []

let Bulbasaur = {
  type: 'grass'+'poison',
  height: 0.7,
};

let Charizard = {
  type: 'fire',
  height:1.6
};

let Pikachu = {
  type: 'electric',
  height: 0.4
};

pokemonList.push(bulbasaur,charizard,pikachu)


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
  
