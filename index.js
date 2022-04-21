const allDataFrame = document.getElementById("pokeNames");
const mainImage = document.getElementById("image");
const toggleSwitch = document.getElementById("switch");
const pokemonDataFrame = document.getElementById('pokemonData');
const pokemonAbilities = document.getElementById('abilities');
const pokemonWeight = document.getElementById('weight');
const allPokeFrame = document.createElement("div");
const grassDiv = document.createElement("div");
const waterDiv = document.createElement("div");
const firediv = document.createElement("div");



const renderAbilities = (abilities) => {
  let abilitiesString = '';
  abilities.forEach((item, index) => {
    abilitiesString += `${abilities.length > 1 && index !== 0 ? ', ' : ''} ${item.ability.name}`;
  })
  return abilitiesString;
}

const getAbilities = async (pokemon) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  .then(res => { return res.json() })
  .then(data => {
    return {
      abilities: data.abilities,
      weight: data.weight
    };
  })
}

const renderAllPokemon = (arrOfObj) => {
  arrOfObj.forEach( async (pokemon) => {
    const abilities = await getAbilities(pokemon);
    const pokemonImg = document.createElement("img");
    pokemonImg.style.height = "120px";
    pokemonImg.style.width = "120px";
    pokemonImg.style.marginTop = "1.5%";
    pokemonImg.style.marginLeft = "5%";
    pokemonImg.style.marginRight = "5%";
    pokemonImg.style.borderRadius = "50%";
    pokemonImg.style.border = "2px solid rgba(0,0,0,0.2)";
    pokemonImg.style.backgroundColor = "rgba(52, 152, 219, 0.2)";
    pokemonImg.addEventListener("mouseover", () => {
      mainImage.src = pokemon.image;
      pokemonDataFrame.style.display = '';
      pokemonAbilities.innerHTML = renderAbilities(abilities.abilities);
      pokemonWeight.innerHTML = abilities.weight;
    });
    if (pokemon.power === 1) {
      pokemonImg.src = pokemon.image;
      grassDiv.append(pokemonImg);
    } else if (pokemon.power === 2) {
      pokemonImg.src = pokemon.image;
      waterDiv.append(pokemonImg);
    } else if (pokemon.power === 3) {
      pokemonImg.src = pokemon.image;
      firediv.append(pokemonImg);
    }
  });
  allPokeFrame.append(grassDiv);
  allPokeFrame.append(waterDiv);
  allPokeFrame.append(firediv);
  allDataFrame.append(allPokeFrame);
};

mainImage.addEventListener("click", () => {
  mainImage.style.marginTop = "0%";
  mainImage.style.width = "200px";
  mainImage.style.height = "200px";
  mainImage.src = "./assets/openBall.png";
  allDataFrame.style.display = "";
});

document.addEventListener("DOMContentLoaded", async () => {
  await fetch("http://localhost:3000/pokeNames")
    .then((resp) => {
      return resp.json();
    })
    .then((pokemon) => {
      renderAllPokemon(pokemon);
    });
});
