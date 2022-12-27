import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import CouponController from './controllers/coupon.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateCouponDto } from './dto/create-coupon.dto.js';
import { UpdateCouponDto } from './dto/update-coupon.dto.js';
import { DeleteCouponDto } from './dto/delete-coupon.dto.js';


const CouponRouter = express.Router()
const validator = createValidator({})

CouponRouter.get('/', CouponController.getCoupon)
CouponRouter.get('/:id', CouponController.getCouponById)
CouponRouter.post('/', validator.body(CreateCouponDto), CouponController.createCoupon)
CouponRouter.put('/:id', validator.body(UpdateCouponDto), CouponController.updateCoupon)
CouponRouter.delete('/:id', validator.body(DeleteCouponDto), CouponController.deleteCouponById)

export default CouponRouter