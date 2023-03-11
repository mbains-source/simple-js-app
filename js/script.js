let pokemonList = []

let Bulbasaur = {
  type: 'grass'+'poison',
  height: 7,
};

let Charizard = {
  type: 'fire',
  height:6
};

let Pikachu = {
  type: 'electric',
  height: 4
};

pokemonList.push(bulbasaur,charizard,pikachu)


for (let i= 0; i < pokemonList.length;i++){
  if (pokemonList[i].height>= 5  );
  document.write(pokemonList[i].name+  "(height: + pokemonList[i].height + "m) - "Wow, that is a big pokemon!" + "<br>";
} else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
  document.write(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!" + "m) - That is a medium pokemon!" + "<br>");
} else {
document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!" + "<br>");
}
