let express = require('express')
let apiRoutes = require('./api-routes')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

let app = express();
var port = 3000


app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/restful', {
    useNewUrlParser: true
})

var db = mongoose.connection
if(!db) console.log('Error connectng db')
else console.log('Db connected successfully')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', apiRoutes)



app.listen(port, () => {
    console.log('Running RestFul on port ' + port)
})