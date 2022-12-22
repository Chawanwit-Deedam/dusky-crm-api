import OrderHistoryService from '../services/orderHistory.service.js'
//import CustomerService from '../../customer/services/customer.service.js'
//import OrderItemService from '../../orderItem/services/orderItem.service.js'
import MembershipService from '../../membership/services/membership.service.js'

const OrderHistoryController = {
    getOrderHistory: async (req, res) => {
        const orderHistory = await OrderHistoryService.getAll()

        res.status(200).json({
            success: true,
            data: orderHistory
        })
    },
    getOrderHistoryById: async (req, res) => {
        const { id } = req.params
        const orderHistory = await OrderHistoryService.getOne(id)

        res.status(200).json({
            success: true,
            data: orderHistory
        })
    },
    getOrderHistoryByIdRepeat: async (req, res) => {
        try {
            const { id } = req.params
            const orderHistory = await OrderHistoryService.getRepeat(id)

            res.status(200).json({
                success: true,
                data: orderHistory
            })
        } catch (error) {
            res.status(200).json({
                success: false,
                data: error
            })
            console.log(error)
        }


        
    },
    getLevelAll: async (req, res) => {
        const { id } = req.params
        const levelMember = await OrderHistoryService.getLevel(id)
        
        res.status(200).json({
            success: true,
            data: levelMember
        })
    },
<<<<<<< HEAD
    getLevelAll: async (req, res) => {
        const { id } = req.params
        const levelMember = await OrderHistoryService.getLevel(id)
        
        res.status(200).json({
            success: true,
            data: levelMember
        })
    },
    createOrderHistory: async (req, res) => {
        ///const id = req.body.id
=======
    createOrderHistory: async (req, res) => {
        ///const id = req.body.id
<<<<<<< HEAD
        const { customer, item, orderQuantitytotal, orderPricetotal, orderRepeattype, dateOfbuy, deliveryStatus, idPromotion, payment } = req.body

        const { sumPrice, sumQuantity, repeatType } = OrderHistoryService.getCumulativeAmount(item)
        const created = await OrderHistoryService.create({ customer, item, orderPriceTotal: sumPrice, orderQuantityTotal: sumQuantity, orderRepeatType: repeatType, dateOfbuy, deliveryStatus, idPromotion, payment })

=======
>>>>>>> dev
        const { customer, item , orderQuantitytotal, orderPricetotal, orderRepeattype, dateOfbuy, deliveryStatus, idPromotion, payment, memberShip } = req.body
        

        const {sumPrice,sumQuantity, repeatType} = OrderHistoryService.getCumulativeAmount(item) 
        // const orderQuantityTotal = OrderHistoryService.getQuantityCal(item) 
        // const orderRepeatType = OrderHistoryService.getRepeatType(item)
        //const order = await OrderItemService.getOne( idOrder )
        const created = await OrderHistoryService.create({ customer, item , orderPriceTotal: sumPrice , orderQuantityTotal: sumQuantity, orderRepeatType: repeatType,  dateOfbuy, deliveryStatus, idPromotion, payment, memberShip })
    
>>>>>>> dbda108 (add membership)
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateOrderHistory: async (req, res) => {
        const { id } = req.params
        const { customer, order, orderPriceTotal, dateOfbuy, deliveryStatus, idPromotion, payment } = req.body
        const updated = await OrderHistoryService.updateOne(id, { customer, order, orderPriceTotal, dateOfbuy, deliveryStatus, idPromotion, payment })

        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteOrderHistoryById: async (req, res) => {
        const { id } = req.params
        const orderHistory = await OrderHistoryService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: orderHistory
        })
    },
}
export default OrderHistoryController

// const orderQuantityTotal = OrderHistoryService.getQuantityCal(item)
        // const orderRepeatType = OrderHistoryService.getRepeatType(item)
        //const order = await OrderItemService.getOne( idOrder )