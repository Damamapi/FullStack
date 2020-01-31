const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/'
const container = document.querySelector('.container')
const searchButton = document.querySelector('#searchButton')
const searchBar = document.querySelector('#searchBar')
const pageSelect = document.querySelector('#pages')

let charArr
let numberOfPages = 1
let qName = '', qPage = 1, prevQname = 'init'

console.log(prevQname)
query()

searchButton.addEventListener('click', (clickEvent) => {
    qName = searchBar.value.toLowerCase()
    query()
})

pageSelect.addEventListener('change', changeEvent => {
    qPage = pageSelect.value
    query()
})

function query() {
    jQuery.ajax(`${URL_CHARACTERS}?page=${qPage}&name=${qName}`, {
        success: (response) => {
            numberOfPages = response.info.pages
            charArr = response.results
            updateView(charArr)
            console.log(prevQname, qName != prevQname)
            if(qName != prevQname) updatePageSelect()
            prevQname = qName
        },
        error: (error) => {
            console.error('Error in GET', error)
        }
    })
}

function updatePageSelect() {
    let t = ''
    for(let i = 1; i <= numberOfPages; i++) {
        t += `<option value="${i}" selected>${i}</option>`
    }
    pageSelect.innerHTML = t
}

function updateView(charList = charArr) {
    let t = "";
    [].forEach.call(charList, char => {
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