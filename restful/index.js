let express = require('express')
let apiRoutes = require('./api-routes')
let app = express();
var port = 3000


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log('Running RestFul on port ' + port)
})