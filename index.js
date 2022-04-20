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
          document.getElementById('pokeimages').append(img)
      })
  }

 const pokemonName =() => {
     image.addEventListener("mouseover", () => {
         
     })
 }

  const styleElements = (frame, image) => {
    frame.style.display = 'inline-block'
    frame.style.flexDirection = 'row';
    image.style.width = '350px';
    image.style.height = '350px';
    image.style.borderRadius = '1.5%';
    image.style.marginLeft = '2%';
    image.style.marginRight = '2%';
    image.style.marginTop = '2%';
}

  const eventListeners = (image, pokemon) => {
    image.addEventListener('mouseenter', () => {
        image.style.height = '500px';
        image.style.width = '500px';
        image.style.left = timePassed / 5 + 'px';
    })
    image.addEventListener('mouseleave', () => {
        image.style.height = '350px';
        image.style.width = '350px';
    })
    const frame = document.createElement('div');
}
