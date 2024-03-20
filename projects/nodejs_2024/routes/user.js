const express = require('express')
const router = express.Router()

const { security } = require('../conf/constant');
const Users = require('../models/Users')
const { register, login } = require('../controllers/UserController')

// Register
router.post('/register', register);
// Login
router.post('/login', login);

module.exports = router;