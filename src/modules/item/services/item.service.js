import ItemModel from '../models/item.schema.js'

const ItemService = {
    create: (id, payload) => {
        return new ItemModel({ _id: id },(payload)).save()
    },
    getAll:(query = {}) => {
        return ItemModel.find(query)
    },
    getOne:(id) => {
        return ItemModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return ItemModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return ItemModel.deleteOne({_id: id})
    } 
}

export default ItemService