import OrderHistoryService from '../services/orderHistory.service.js'
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
        const { item, orderPriceTotal } = req.body
        const created = await OrderHistoryService.create({ item, orderPriceTotal })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateOrderHistory: async (req, res) =>{
        const { id } = req.params
        const { item, orderPriceTotal } = req.body
        const updated = await OrderHistoryService.updateOne(id, { item, orderPriceTotal })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteOrderHistoryById: async (req, res) => {
        const { id } = req.body
        const orderHistory = await OrderHistoryService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: orderHistory
        })
    },
}
export default OrderHistoryController