const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const professorRoute = require('./routes/professorRoutes')
const usuarioRoute = require('./routes/usuarioRoutes')

app.set('views', './views')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(professorRoute)
app.use(usuarioRoute)

app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })