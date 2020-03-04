const body = document.querySelector('body')


function createDivId(id) {
    let r = document.createElement('div')
    r.id = id
    return r
}

function createIcon(icon) {
    let r = document.createElement('i')
    r.className = 'material-icons'
    r.innerText = icon
    return r;
}

let navb = document.createElement('nav')
let navbar = document.createElement('div')
navbar.className = 'nav-wrapper'
navb.appendChild(navbar)

let divLogo = document.createElement('div')
divLogo.id = 'divLogo'
let title = document.createElement('a')
title.innerText = 'Onefootball'
title.className = 'brand-logo'
title.href = '#'
let ico = document.createElement('img')
ico.src = 'https://onefootball.com/assets/favicon.ico?rev=2d92294e-prod'
ico.alt = 'ico'
ico.className = 'titleIco'
divLogo.className = 'left'
divLogo.appendChild(ico)
divLogo.appendChild(title)


let searchForm = document.createElement('form')
searchForm.className = 'searchForm right'
let searchBarIcon = document.createElement('i')
searchBarIcon.innerHTML = 'search'
searchBarIcon.className = 'material-icons navIco'
let searchBar = document.createElement('input')
searchBar.className = 'searchBar'
searchBar.placeholder = 'Search for teams and competitions'
searchForm.appendChild(searchBar)
searchForm.appendChild(searchBarIcon)

navbar.appendChild(divLogo)

navbar.appendChild(searchForm)

body.appendChild(navb)

let bodyC = document.createElement('div')
bodyC.className = 'container'

body.appendChild(bodyC)

let ppDiv = createDivId('ppDiv')
let ppTitle = createDivId('ppTitle')

ppTitle.appendChild(createIcon('flash_on'))
let ppTitleh2 = document.createElement('h2')
ppTitleh2.innerText = 'Popular Pages'
ppTitle.appendChild(ppTitleh2)
ppDiv.appendChild(ppTitle)
bodyC.appendChild(ppDiv)





