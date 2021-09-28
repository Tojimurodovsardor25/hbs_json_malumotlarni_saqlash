const express = require('express')
const router = express()
const Phone = require('../model/Phone')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    })
})

module.exports = router