const WORDS_LIST = ['hospitable', 'lonely', 'juvenile',
    'happen', 'squealing', 'flawless', 'attract',
    'wool', 'unbiased', 'suggest', 'crate',
    'basketball', 'abstracted', 'dirt', 'escape',
    'cent', 'desire', 'chop', 'left', 'waves',
    'shaky', 'jumpy', 'dreary', 'doubt', 'drain',
    'art', 'wrap', 'geese', 'helpless', 'gold'
]

let objects = []
const container = document.getElementById('container')
const sortSelect = document.getElementById('sort')
const chaosBut = document.getElementById('chaosButton')

WORDS_LIST.forEach((word) => {
    let name = word
    let price = Math.floor(Math.random() * 100) * 100
    let clas =  (price < 3333) ? 'cheap' :
                (price < 6666) ? 'norm' :
                'exp';
    objects.push({ name: name, price:price, clas: clas} )
})

chaosBut.addEventListener('click', event => {
    setInterval(randomSort, 1000);
})
function randomSort() {
    objects.sort((a, b) => a.name<b.name ? (Math.floor(Math.random())) : (Math.floor(Math.random() * 3) - 1))
    refreshGrid()
}

sortSelect.addEventListener('change', event => {
    const val = sortSelect.value
    let comp = function() {}

    switch(val) {
        case 'AZ':
            comp = (obj1, obj2) => obj1.name > obj2.name ? 1 : -1
            break
        case 'ZA':
            comp = (obj1, obj2) => obj1.name > obj2.name ? -1 : 1
            break
        case 'LotoHi':
            comp = (obj1, obj2) => obj1.price > obj2.price ? 1 : -1
            break
        case 'HitoLo':
            comp = (obj1, obj2) => obj1.price > obj2.price ? -1 : 1
            break
        default:
            console.log('unexpected')
    }

    objects = objects.sort(comp)
    refreshGrid()
})


function refreshGrid() {
    let content = ''
    objects.forEach(element => {
        content+= drawElement(element)
    })
    container.innerHTML = content
}


function drawElement(element) {
    return `<div class="element ${element.clas}">${element.name} <br> ${element.price}</div>`
}

refreshGrid()