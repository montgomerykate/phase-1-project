window.addEventListener('DOMContentLoaded', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => res.json())
    .then(pokeNames => addNamesToDOM(pokeNames))
})

