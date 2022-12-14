import express from 'express'
import CustomerRouter from './modules/customer/customer.route.js'
import ProductRouter from './modules/product/product.route.js'
import MembershipRouter from './modules/membership/membership.route.js'
import PromotionRouter from './modules/promotion/promotion.route.js'
import OrderHistoryRouter from './modules/orderHistory/orderHistory.route.js'
import CampaignRouter from './modules/campaign/campaign.route.js'
import OrderItemRouter from './modules/orderItem/orderItem.route.js'

const AppRouter = express()

AppRouter.use('/customer', CustomerRouter)
AppRouter.use('/product', ProductRouter)
AppRouter.use('/membership', MembershipRouter)
AppRouter.use('/promotion', PromotionRouter)
AppRouter.use('/orderHistory', OrderHistoryRouter)
AppRouter.use('/campaign', CampaignRouter)
AppRouter.use('/orderItem', OrderItemRouter)


export default AppRouter