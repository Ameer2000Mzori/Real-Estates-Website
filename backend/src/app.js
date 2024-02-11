import express, { Router } from 'express'
import 'dotenv/config'

const app = express()
const Routers = express.Router()
// our port :
const PORT = process.env.PORT || 3000

Routers.get('/', (req, res) => {
  res.send('this is home page')
})

app.listen(PORT, (req, res) => {
  console.log(`server is running at port ${PORT}`)
})
