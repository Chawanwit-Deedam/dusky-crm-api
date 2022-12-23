import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import EmployeeController from './controllers/employee.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';
import { DeleteEmployeeDto } from './dto/delete-employee.dto.js';


const EmployeeRouter = express.Router()
const validator = createValidator({})

EmployeeRouter.get('/', EmployeeController.getEmployee)
EmployeeRouter.get('/:id', EmployeeController.getEmployeeById)
EmployeeRouter.post('/', validator.body(CreateEmployeeDto), EmployeeController.createEmployee)
EmployeeRouter.put('/:id', validator.body(UpdateEmployeeDto), EmployeeController.updateEmployee)
EmployeeRouter.delete('/:id', validator.body(DeleteEmployeeDto), EmployeeController.deleteEmployeeById)

export default EmployeeRouter