/* 
Object notation 

{
    key: value,
    key: value,
    key: value
}

let element = document.createElement('tag')
element.id = "id"
element.className = "class class2"
element.innerText = "Hello there"
container.appendCHild(element)
container.insertBefore(newChild, refCHild: Node)
*/

let objects = []
let childs = []
let Q = 100;
let container = document.querySelector('#container')
let filterSelect = document.querySelector('#filter')
let sortSelect = document.querySelector('#sort')

for (let i = 1; i <= Q; i++) {
    const obj = {
        text: `${i}`,
        class: 'element'
    }
    if (i % 3 === 0 && i % 5 === 0) obj.class += ' FooBar'
    else if (i % 5 == 0) obj.class += ' Bar'
    else if (i % 3 == 0) obj.class += ' Foo'
    objects.push(obj)
}

objects.forEach((element) => {
    const child = document.createElement('div')
    child.innerText = element.text
    child.className = element.class
    childs.push(child)
    container.appendChild(child)
})

filterSelect.addEventListener('change', (event) => {
    const value = (filterSelect.value === '') ? 'element' : filterSelect.value
    const list = container.children

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (!element.classList.contains(`${value}`)) {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    }
})


sortSelect.addEventListener('change', (event) => {
    const value = (sortSelect.value === '') ? 'none' : sortSelect.value
    const list = childs
    let count = 0
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        
        if(value !== 'none') {
            if (element.classList.contains(`${value}`)) {
                container.insertBefore(element, container.firstChild)
            }
            count++
        }
        else {
            container.appendChild(element)
        }
    }
})