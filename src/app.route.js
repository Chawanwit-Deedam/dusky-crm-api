import express from 'express'
import CustomerRouter from './modules/customer/customer.route.js'
import ProductRouter from './modules/product/product.route.js'
import MembershipRouter from './modules/membership/membership.route.js'
import PromotionRouter from './modules/promotion/promotion.route.js'

const AppRouter = express()

AppRouter.use('/customer', CustomerRouter)
AppRouter.use('/product', ProductRouter)
AppRouter.use('/membership', MembershipRouter)
AppRouter.use('/promotion', PromotionRouter)


export default AppRouter