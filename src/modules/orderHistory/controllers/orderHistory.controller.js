import OrderHistoryService from '../services/orderHistory.service.js'

const OrderHistoryController = {
    getOrderHistory: async (req, res) => {
        try {
            const orderHistory = await OrderHistoryService.getAll()

            res.status(200).json({
                success: true,
                data: orderHistory
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    getOrderHistoryById: async (req, res) => {
        try {
            const { id } = req.params
            const orderHistory = await OrderHistoryService.getOne(id)

            res.status(200).json({
                success: true,
                data: orderHistory
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    getOrderHistoryByIdReport: async (req, res) => {
        try {
            const { id } = req.params
            const orderHistory = await OrderHistoryService.getReport(id)

            res.status(200).json({
                success: true,
                data: orderHistory
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    createOrderHistory: async (req, res) => {
        try {
            const { customer, item, orderQuantitytotal, orderPricetotal, orderRepeattype, dateOfbuy, deliveryStatus, idPromotion, payment } = req.body
            const { sumPrice, sumQuantity, repeatType } = OrderHistoryService.getCumulativeAmount(item)
            const created = await OrderHistoryService.create({ customer, item, orderPriceTotal: sumPrice, orderQuantityTotal: sumQuantity, orderRepeatType: repeatType, dateOfbuy, deliveryStatus, idPromotion, payment })

            res.status(201).json({
                success: true,
                data: created
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    updateOrderHistory: async (req, res) => {
        try {
            const { id } = req.params
            const { customer, order, orderPriceTotal, dateOfbuy, deliveryStatus, idPromotion, payment } = req.body
            const updated = await OrderHistoryService.updateOne(id, { customer, order, orderPriceTotal, dateOfbuy, deliveryStatus, idPromotion, payment })

            res.status(200).json({
                success: true,
                data: updated
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    deleteOrderHistoryById: async (req, res) => {
        try {
            const { id } = req.params
            const orderHistory = await OrderHistoryService.deleteOne(id)

            res.status(200).json({
                success: true,
                data: orderHistory
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
}
export default OrderHistoryController

// const orderQuantityTotal = OrderHistoryService.getQuantityCal(item)
        // const orderRepeatType = OrderHistoryService.getRepeatType(item)
        //const order = await OrderItemService.getOne( idOrder )