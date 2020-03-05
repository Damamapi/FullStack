const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const files = path.join(__dirname, '/views')

app.use( express.static( path.join( __dirname, '/public') ) )

app.get('/', (req, res) => {
    res.sendFile( `${files}/index.html` )
}).listen(port)

app.route('/user').get( (req, res) => {
    res.sendFile( `${files}/index.html` )
})

app.route('/login/?').get( (req, res) => {
    let q = req.query
    if(q.user === 'david' && q.pwd === '1234') {
        res.sendFile(`${files}/user.html`)
    } else {
        res.send('ERROR')
    }
})


console.log('primer')