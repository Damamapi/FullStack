const express = require('express')
const app = express()
const port = 6969
const path = require('path')

const files = path.join(__dirname, '/views')
app.set('view engine', 'pug')

app.use( express.static( path.join(__dirname, '/public')))
app.listen(port)

app.get('/', (req, res) => {
    res.render('index', {})
})

app.route('/habilidades').get((req, res) => {
    res.render('habilidades', {})
})