import express from 'express'
import CustomerRouter from './modules/customer/customer.route.js'
import ItemRouter from './modules/item/item.route.js'
import MembershipRouter from './modules/membership/membership.route.js'
import PromotionRouter from './modules/promotion/promotion.route.js'
import OrderHistoryRouter from './modules/orderHistory/orderHistory.route.js'
import CampaignRouter from './modules/campaign/campaign.route.js'

const AppRouter = express()

AppRouter.use('/customer', CustomerRouter)
AppRouter.use('/item', ItemRouter)
AppRouter.use('/membership', MembershipRouter)
AppRouter.use('/promotion', PromotionRouter)
AppRouter.use('/orderHistory', OrderHistoryRouter)
AppRouter.use('/campaign', CampaignRouter)


export default AppRouter