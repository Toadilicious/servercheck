var express = require('express')
var router = express.Router()
var auth = require('../libs/auth')
// var Server = require('./models/server')

router.get('/', auth.isLoggedIn, function (req, res, next) {
  res.render('servers', { user: req.user, isLoggedIn: true })
})

module.exports = router
