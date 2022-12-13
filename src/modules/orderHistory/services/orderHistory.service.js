import OrderHistoryModel from '../models/orderHistory.schema.js'

const OrderHistoryService = {
    create: (payload) => {
        return new OrderHistoryModel(payload).save()
    },
    getAll:(query = {}) => {
        return OrderHistoryModel.find(query)
    },
    getOne:(id) => {
        return OrderHistoryModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return OrderHistoryModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return OrderHistoryModel.deleteOne({_id: id})
    } 
}

export default OrderHistoryService