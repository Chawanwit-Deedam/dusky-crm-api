import OrderItemService from "../services/orderItem.service.js"
import ItemService from "../../item/services/item.service.js"
const OrderItemController = {
    getOrderItem: async (req, res) =>{
        const orderitem = await OrderItemService.getAll()

        res.status(200).json({
            success: true,
            data: orderitem
        })
    },
    getOrderSumItem: async (req, res) =>{
        const orderitem = await OrderItemService.getSumItem()

        res.status(200).json({
            success: true,
            data: orderitem
        })
    },
    getOrderItemById: async (req, res) => {
        const { id } = req.params
        const orderitem = await OrderItemService.getOne(id)

        res.status(200).json({
            success: true,
            data: orderitem
        })
    },

    createOrderItem: async (req, res) => {
        ///const id = req.body.id
        //const { allitem, dateOforder } = req.body
        // const orderItem = await CustomerService.getOne(allitem)
        // const created = await OrderItemService.create({ orderItem, dateOforder })
        // const { allitem } = req.body
        // const orderItem = await ItemService.getSome(allitem)
        const { allitem, dateOforder } = req.body
        const created = await OrderItemService.create({ orderItem, sumOrder })

        
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateOrderItem: async (req, res) =>{
        const { id } = req.params
        const { productType, productName, productPrice } = req.body
        const updated = await OrderItemService.updateOne(id, { productType, productName, productPrice })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteOrderItemById: async (req, res) => {
        const { id } = req.body
        const orderitem = await OrderItemService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: orderitem
        })
    },
}
export default OrderItemController