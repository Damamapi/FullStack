Contact = require('./contactModel')

exports.index = (req, res) => {
    Contact.find({})
        .then((contacts) => {
            res.json({
                status: 'success',
                message: 'Contacts retrieved successfully',
                data: contacts
            })
        })
}

exports.new = (req, res) => {
    let contact = new Contact()
    contact.name = req.query.name ? req.query.name : contact.name
    contact.gender = req.query.gender
    contact.email = req.query.email
    contact.phone = req.query.phone
    
    console.log(req)
    contact.save((err) => {
        if(err) res.json(err)
        else {
        }
        res.json({
            message: 'New contact created!',
            data: contact
        })
    })
}

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) res.send(err)
        res.json({
            message: 'Contact details loading...',
            data: contact
        })
    })
}

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) res.send(err)
        contact.name = req.query.name ? req.query.name : contact.name
        contact.gender = req.query.gender
        contact.email = req.query.email
        contact.phone = req.query.phone

        contact.save((err) => {
            if (err) res.json(err)
            res.json({
                message: 'Contact Info updated',
                data: contact
            })
        })
    })
}

exports.delete = (req, res) => {
    Contact.remove({
        _id: req.params.contact_id
    }, (err, contact) => {
        if (err) res.send(err)
        res.json({
            status: 'success',
            message: 'Contact deleted-'
        })
    })
}