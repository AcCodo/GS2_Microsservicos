const express = require('express')
const router = express.Router()
const controller = require('../controllers/indicadores_controller')

router.get('/:id', controller.get)

module.exports = router