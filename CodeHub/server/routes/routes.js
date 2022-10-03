const express = require('express')
const router = express.Router()

router.get('/signup', (req, res) => {
  res.send('You have reached the sign up page. Congratulations.')
})

module.exports = router