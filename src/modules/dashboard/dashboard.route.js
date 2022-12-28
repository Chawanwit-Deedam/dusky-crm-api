import express from 'express'
import DashboardController from './controllers/dashboard.controller.js'
import { createValidator } from 'express-joi-validation'

const DashboardRouter = express.Router()
const validator = createValidator({})

DashboardRouter.get('/', DashboardController.getDashboard)

export default DashboardRouter

