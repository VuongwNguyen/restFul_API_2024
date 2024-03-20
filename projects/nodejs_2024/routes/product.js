const express = require('express')
const router = express.Router();
const { security } = require('../conf/constant');
const Products = require('../models/Products');


router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the product page' });
});

router.get('/list', (req, res) => {
    res.json({ message: 'List of products' });
});


module.exports = router;