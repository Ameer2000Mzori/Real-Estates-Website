import express from 'express'
import 'dotenv/config'
import router from './route/routes.js'

const app = express()
app.use(express.json())
app.use(router)
// our port :
const PORT = process.env.PORT || 3000

app.listen(PORT, (req, res) => {
  console.log(`server is running at port ${PORT}`)
})
