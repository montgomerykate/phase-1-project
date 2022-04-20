document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pokeNames')
      .then(resp => resp.json())
      .then(pokemon => renderAllPokemon(pokemon))
  });

  const renderAllPokemon = (arrOfObj) => {
      const div = document.getElementById('detailed-info')
      arrOfObj.forEach(pokeNames => {
          const img =document.createElement("img")
          img.src = pokeNames.image
          img.id = pokeNames.id
      })
  }

