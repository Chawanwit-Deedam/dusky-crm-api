import express from 'express'
import ExecutiveController from './controller/executive.controller.js'
import { createValidator } from 'express-joi-validation'
import { CreateExecutiveDto } from './dto/create-executive.dto.js'
import { UpdateExecutiveDto } from './dto/update-executive.dto.js'
import { DeleteExecutiveDto } from './dto/delete-executive.dto.js'

const ExecutiveRouter = express.Router()
const validator = createValidator({})

ExecutiveRouter.get('/', ExecutiveController.getExecutive)
ExecutiveRouter.get('/:id', ExecutiveController.getExecutiveById)
ExecutiveRouter.post('/', validator.body(CreateExecutiveDto), ExecutiveController.createExecutive)
ExecutiveRouter.put('/:id', validator.body(UpdateExecutiveDto), ExecutiveController.updateExecutive)
ExecutiveRouter.delete('/:id', validator.body(DeleteExecutiveDto), ExecutiveController.deleteExecutiveById)

export default ExecutiveRouter