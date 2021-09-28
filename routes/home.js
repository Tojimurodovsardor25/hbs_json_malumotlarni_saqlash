const express = require('express')
const router = express()
const Product = require('../model/Phone')

router.get('/', async (req, res) => {
    const allProduct = await Product.getAll()
    console.log(allProduct);
    res.render('index', {
        title: 'Home',
        isHome: true,
        allProduct
    })
})

module.exports = router