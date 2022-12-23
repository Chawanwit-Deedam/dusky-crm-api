import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import OrderHistoryController from './controllers/orderHistory.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateOrderHistoryDto } from './dto/create-orderHistory.dto.js';
import { UpdateOrderHistoryDto } from './dto/update-orderHistory.dto.js';
import { DeleteOrderHistoryDto } from './dto/delete-orderHistory.dto.js';


const OrderHistoryRouter = express.Router()
const validator = createValidator({})

OrderHistoryRouter.get('/', OrderHistoryController.getOrderHistory)

OrderHistoryRouter.get('/Report/:id', OrderHistoryController.getOrderHistoryByIdReport)

OrderHistoryRouter.get('/:id', OrderHistoryController.getOrderHistoryById)
OrderHistoryRouter.post('/', validator.body(CreateOrderHistoryDto), OrderHistoryController.createOrderHistory)
OrderHistoryRouter.put('/:id', validator.body(UpdateOrderHistoryDto), OrderHistoryController.updateOrderHistory)
OrderHistoryRouter.delete('/', validator.body(DeleteOrderHistoryDto), OrderHistoryController.deleteOrderHistoryById)

export default OrderHistoryRouter