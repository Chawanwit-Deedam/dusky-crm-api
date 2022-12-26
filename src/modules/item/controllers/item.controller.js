import ItemService from '../services/item.service.js'
const ItemController = {
    getItem: async (req, res) => {
        try {
            const item = await ItemService.getAll()

            res.status(200).json({
                success: true,
                data: item
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    getItemById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await ItemService.getOne(id)

            res.status(200).json({
                success: true,
                data: item
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },

    createItem: async (req, res) => {
        try {
            const { itemName, itemPrice, itemQuantity, itemType } = req.body
            const created = await ItemService.create({ itemName, itemPrice, itemQuantity, itemType })

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
        ///const id = req.body.id

    },
    updateItem: async (req, res) => {
        try {
            const { id } = req.params
            const { itemName, itemPrice, itemQuantity, itemType } = req.body
            const updated = await ItemService.updateOne(id, { itemName, itemPrice, itemQuantity, itemType })

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
    deleteItemById: async (req, res) => {
        try {
            const { id } = req.body
            const item = await ItemService.deleteOne(id)

            res.status(200).json({
                success: true,
                data: item
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
export default ItemController