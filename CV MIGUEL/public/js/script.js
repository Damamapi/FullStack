let route = window.location.pathname.substr(1)
if(route !== '') {
    let active = document.querySelector('#' + route)
    active.className = "active"
}