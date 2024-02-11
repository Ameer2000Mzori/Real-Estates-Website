import express from 'express'
import 'dotenv/config'

const app = express()

// our port :
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('this is home page')
})

app.listen(PORT, (req, res) => {
  console.log(`server is running at port ${PORT}`)
})
