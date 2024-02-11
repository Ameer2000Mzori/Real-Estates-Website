import express from 'express'
import { homePage, housesPage } from '../controller/controllers.js'
const router = express.Router()

router.get('/', homePage)
router.get('/houses', housesPage)

export default router
