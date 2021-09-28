const express = require('express')
const router = express()


router.get('/', (req, res) => {
    res.render('new', {
        title: 'New',
        isNew: true
    })
})

router.post('/', async (req, res) => {
    console.log(req.body.name);
    const phone = new phone(req.body.name,req.body.price,req.body.img)
    await phone.save()
    res.redirect('/add')
})
module.exports = router