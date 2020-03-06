let router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RestFul crafted with love!'
    })
})

module.exports = router