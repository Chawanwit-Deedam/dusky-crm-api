import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import CustomerController from './controllers/customer.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
import { DeleteCustomerDto } from './dto/delete-customer.dto.js';


const CustomerRouter = express.Router()
const validator = createValidator({})

CustomerRouter.get('/', CustomerController.getCustomer)
CustomerRouter.get('/:id', CustomerController.getCustomerById)
CustomerRouter.post('/', validator.body(CreateCustomerDto), CustomerController.createCustomer)
CustomerRouter.patch('/:id', validator.body(UpdateCustomerDto), CustomerController.updateCustomer)
CustomerRouter.delete('/', validator.body(DeleteCustomerDto), CustomerController.deleteCustomerById)

export default CustomerRouter