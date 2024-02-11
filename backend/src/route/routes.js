import express from 'express'
import { homePage, housesPage, addHouse } from '../controller/controllers.js'
const router = express.Router()

router.get('/', homePage)
router.get('/houses', housesPage)
router.post('/add/house', addHouse)
export default router
