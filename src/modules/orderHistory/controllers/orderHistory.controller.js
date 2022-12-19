import OrderHistoryService from '../services/orderHistory.service.js'
//import CustomerService from '../../customer/services/customer.service.js'
//import OrderItemService from '../../orderItem/services/orderItem.service.js'

const OrderHistoryController = {
    getOrderHistory: async (req, res) =>{
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

    createOrderHistory: async (req, res) => {
        ///const id = req.body.id
        const { customer, item , orderQuantitytotal, orderPricetotal, orderRepeattype, dateOfbuy, deliveryStatus, idPromotion, payment } = req.body
        //const { customer, item , dateOfbuy, deliveryStatus, idPromotion, payment } = req.body
        // const arr = Array()
        // arr[0] = order[2]
        // arr[1] = order[1]
        // const orderPriceTotal = arr
        
        const {sumPrice,sumQuantity, repeatType} = OrderHistoryService.getCumulativeAmount(item) 
        // const orderQuantityTotal = OrderHistoryService.getQuantityCal(item) 
        // const orderRepeatType = OrderHistoryService.getRepeatType(item)
        //const order = await OrderItemService.getOne( idOrder )
        const created = await OrderHistoryService.create({ customer, item , orderPriceTotal: sumPrice , orderQuantityTotal: sumQuantity, orderRepeatType: repeatType,  dateOfbuy, deliveryStatus, idPromotion, payment })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateOrderHistory: async (req, res) =>{
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