const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const pugRoute = require('./routes/pugRoutes')

app.use(bodyParser.json())

app.set('views', './views')

app.set('view engine', 'ejs')

app.use(pugRoute)

app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })