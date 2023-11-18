const characterList = document.getElementById('character-list')
const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')
let next
let prev
let page = 'https://rickandmortyapi.com/api/character/?page=1'

let paginaActual = 1

function getFetchRickandMortyCharacter(page) {
  characterList.innerHTML = ''
  fetch(page)
  .then((response) => {
    if(!response.ok) {
      throw new Error('La solicitud no fue exitosa')
    } return response.json()
  })
  .then((data) => {
    
    const characters = data.results
    const info = data.info
    next = data.info.next
    prev = data.info.prev


    console.log(info)
    characters.forEach(character => {
      let listItem = `
        <li>
          <img src="${character.image}" alt='${character.name}' />
          <p><span>Nombre: </span>${character.name}</p>
          <p><span>Especie: </span>${character.species}</p>
        </li>
      `
      characterList.innerHTML += listItem
    })
  })
}

nextPage.addEventListener('click', function() {
  getFetchRickandMortyCharacter(next)
})

prevPage.addEventListener('click', function() {
  getFetchRickandMortyCharacter(prev)
})

getFetchRickandMortyCharacter(page)



