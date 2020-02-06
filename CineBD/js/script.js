const msgBienvenida = document.querySelector('#msg-bienvenida h3')
const carteleraContainer = document.querySelector('#cartelera .carousel')
const apiURL = "https://api.myjson.com/bins/10uloi"
const proximosContainer = document.querySelector('#proximos .carousel')

let peliculasJSON

;(async () => {

    const {
        value: text
    } = await Swal.fire({
        title: 'Ingresa tu nombre',
        input: 'text',
        inputPlaceholder: 'Tu nombre aquí',
        inputValidator: (value) => {
            if (!value) {
              return 'Debes escribir tu nombre!'
            }
          }
    })
    window.localStorage.setItem('name', text)
    msgBienvenida.innerHTML += ', ' + window.localStorage.getItem('name')
})()

function crearTarjeta(pelicula, ind) {
    return `<div class="carousel-item card">
    <div class="card-image">
    <img onclick="mostrarMas(event)" src="${pelicula.img_url}" class="${ind}">
    </div>
    </div>`
}

$.ajax(apiURL, {
    success: (json) => {
        peliculasJSON = json
        let t = ''
        for(ind in json.cartelera){
            t += crearTarjeta(json.cartelera[ind], ind)
        }
        carteleraContainer.innerHTML = t;
        t = ''
        for(ind in json.proximos){
            t += crearTarjeta(json.proximos[ind], ind)
        }
        proximosContainer.innerHTML = t;
        $('.carousel').carousel();
        
    },
    error: (error) => {
        console.error('Error in GET', error)
    }
})

function mostrarMas(event) {
    let padre = event.toElement.parentElement.parentElement.parentElement.parentElement.id
    let pelicula = peliculasJSON[padre][parseInt(event.toElement.className)]
    Swal.fire({
        title: pelicula.titulo,
        icon: 'info',
        html: `<ul>
        <li><strong>Título: </strong>${pelicula.titulo}</li>
        <li><strong>Fecha de Estreno: </strong>${pelicula.fecha_estreno}</li>
        <li><strong>Clasificación: </strong>${pelicula.clasificacion}</li>
        <li><strong>Sinopsis: </strong>${pelicula.sinopsis}</li>
        <li><strong>Pais: </strong>${pelicula.pais}</li>
        <li><strong>Duración: </strong>${pelicula.duracion}</li>
        <li><strong>Reparto: </strong>${pelicula.reparto}</li>
        <li><strong>Director: </strong>${pelicula.director}</li>
        <li><strong>Género: </strong>${pelicula.genero}</li>
        <li><strong>Idioma Original: </strong>${pelicula.idioma_original}</li>
    </ul>`
    })
}

$(document).ready(function () {
    $('.sidenav').sidenav();
});
