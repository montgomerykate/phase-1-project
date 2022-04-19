// window.addEventListener('DOMContentLoaded', () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
//     .then(res => res.json())
//     .then(name => addNamesToDOM(name))
// })
const getData = () => {
    fetch('http://localhost:3000/pokeNames')
    .then(res => res.json())
    .then(name => displayName(name))
}

// const span = document.createElement('span')
//         span.innertext=charObj.name
//         span.addEventListener('click', handleClick)
//         document.getElementById('charater-bar').append(span)

// const displayName = (arr) => {
//     arr.forEach(pokeObj)= () => {
//         const span = document.createElement('span')
//         span.innertext=pokeObj.name
//         span.addEventListener('click', handleClick)
//         document.getElementById('pokeName').append(span)
//     }
// }
