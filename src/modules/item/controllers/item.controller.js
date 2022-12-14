import ItemService from '../services/item.service.js'
const ItemController = {
    getItem: async (req, res) =>{
        const item = await ItemService.getAll()

        res.status(200).json({
            success: true,
            data: item
        })
    },
    getItemById: async (req, res) => {
        const { id } = req.params
        const item = await ItemService.getOne(id)

        res.status(200).json({
            success: true,
            data: item
        })
    },

    createItem: async (req, res) => {
        ///const id = req.body.id
        const { itemName, itemPrice, itemQuantity, itemType } = req.body
        const created = await ItemService.create({ itemName, itemPrice, itemQuantity, itemType })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateItem: async (req, res) =>{
        const { id } = req.params
        const { itemName, itemPrice, itemQuantity, itemType } = req.body
        const updated = await ItemService.updateOne(id, { itemName, itemPrice, itemQuantity, itemType })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteItemById: async (req, res) => {
        const { id } = req.body
        const item = await ItemService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: item
        })
    },
}
export default ItemController