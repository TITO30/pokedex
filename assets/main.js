const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("assets/img/pokeball.png");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        let nombre = data.name;
        let tipo = data.types[0].type.name;
        let peso = data.weight;
        let altura = data.height;
        let movimientos = data.abilities.map(abilitie => abilitie.ability.name);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        nombrePok(nombre,tipo,peso,altura,movimientos);
      }
    });
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

const nombrePok = (nombre,tipo,peso,altura,movimientos) => {
  document.getElementById("nombre").innerHTML = nombre;
  document.getElementById("tipo").innerHTML = tipo;  
  document.getElementById("peso").innerHTML = peso;
  document.getElementById("altura").innerHTML = altura;
  document.getElementById("movimientos").innerHTML = movimientos;
  };
