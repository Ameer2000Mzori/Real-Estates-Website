import express from 'express'
import 'dotenv/config'

const app = express()
const router = express.Router()
// our port :
const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.send('this is main page')
})

app.listen(PORT, (req, res) => {
  console.log(`server is running at port ${PORT}`)
})
