const express = require('express')
const app = express()
const port = 6969
const path = require('path')


const files = path.join(__dirname, '/views')
app.set('view engine', 'pug')

app.use( express.static( path.join(__dirname, '/public')))
app.listen(port)

app.get('/', (req, res) => {
    res.render('header', {})
})

app.route('/objetivo').get((req, res) => {
    res.render('objetivo', {})
})
app.route('/experiencia').get((req, res) => {
    res.render('experiencia', {})
})
app.route('/portafolio').get((req, res) => {
    res.render('portafolio', {})
})
app.route('/referencias').get((req, res) => {
    res.render('referencias', {})
})
app.route('/contacto').get((req, res) => {
    res.render('contacto', {})
})