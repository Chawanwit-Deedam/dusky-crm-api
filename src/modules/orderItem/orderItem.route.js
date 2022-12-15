import express from 'express'
import OrderItemController from './controllers/orderItem.controllers.js'
import { createValidator } from 'express-joi-validation'
import { createOrderItemDto } from './dto/create-orderitem.dto.js'

const OrderItemRouter = express.Router()
const validator = createValidator({})

OrderItemRouter.get('/', OrderItemController.getOrderItem)
OrderItemRouter.get('/sum', OrderItemController.getOrderSumItem)
OrderItemRouter.get('/:id', OrderItemController.getOrderItemById)
OrderItemRouter.post('/', validator.body(createOrderItemDto), OrderItemController.createOrderItem)
//OrderItemRouter.patch('/:id', validator.body(UpdateProductDto), OrderItemController.updateOrderItem)
//OrderItemRouter.delete('/', validator.body(DeleteProductDto), OrderItemController.deleteOrderItemById)

export default OrderItemRouter 

