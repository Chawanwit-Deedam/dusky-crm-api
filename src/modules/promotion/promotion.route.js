import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import PromotionController from './controllers/promotion.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreatePromotionDto } from './dto/create-promotion.dto.js';
import { UpdatePromotionDto } from './dto/update-promotion.dto.js';
import { DeletePromotionDto } from './dto/delete-promotion.dto.js';


const PromotionRouter = express.Router()
const validator = createValidator({})

PromotionRouter.get('/', PromotionController.getPromotion)
PromotionRouter.get('/:id', PromotionController.getPromotionById)
PromotionRouter.post('/', validator.body(CreatePromotionDto), PromotionController.createPromotion)
PromotionRouter.patch('/:id', validator.body(UpdatePromotionDto), PromotionController.updatePromotion)
PromotionRouter.delete('/', validator.body(DeletePromotionDto), PromotionController.deletePromotionById)

export default PromotionRouter