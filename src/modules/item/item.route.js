import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import ItemController from './controllers/item.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateItemDto } from './dto/create-item.dto.js';
import { UpdateItemDto } from './dto/update-item.dto.js';
import { DeleteItemDto } from './dto/delete-item.dto.js';


const ItemRouter = express.Router()
const validator = createValidator({})

ItemRouter.get('/', ItemController.getItem)
ItemRouter.get('/:id', ItemController.getItemById)
ItemRouter.post('/', validator.body(CreateItemDto), ItemController.createItem)
ItemRouter.put('/:id', validator.body(UpdateItemDto), ItemController.updateItem)
ItemRouter.delete('/', validator.body(DeleteItemDto), ItemController.deleteItemById)

export default ItemRouter