const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/'
const container = document.querySelector('.container')
const searchButton = document.querySelector('#searchButton')
const searchBar = document.querySelector('#searchBar')

let charArr

searchButton.addEventListener('click', (clickEvent) => {
    const searchValue = searchBar.value.toLowerCase()
    let filterRes = $(charArr).filter((i,n) => n.name.toLowerCase().includes(searchValue))
    console.log(filterRes)
    updateView(filterRes)
})

jQuery.ajax(URL_CHARACTERS, {
    success: (response) => {
        charArr = response.results
        updateView(charArr)
    },
    error: (error) => {
        console.error('Error in GET', error)
    }
})

function updateView(charList){
    let t = ""
    ;[].forEach.call(charList, char => {
        t += createCard(char)
    })
    container.innerHTML = t
}

function createCard(char) {
    return `<article class="char-card">
    <div class="img-top">
        <div class="card-img">
            <img src="${char.image}" alt="${char.name} image">
        </div>
        <div class="img-title">
            <h2>${char.name}</h2>
            <p>${char.species}</p>
        </div>
    </div>
    <div class="txt-wrap">
        <span>STATUS</span>
        <p>${char.status}</p>
    </div>
    <div class="txt-wrap">
        <span>GENDER</span>
        <p>${char.gender}</p>
    </div>
    <div class="txt-wrap">
        <span>ORIGIN</span>
        <p>${char.origin.name}</p>
    </div>
    </article>`
}