const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()
app.use(express.urlencoded({extended: true}))

//require('./models/indicadores')

const route_indicadores = require('./routers/route_indicadores')
app.use('/indicador', route_indicadores)

const route_objetivos = require('./routers/route_objetivos')
app.use('/objetivos', route_objetivos)

app.listen(PORT, HOST)

module.exports = app;