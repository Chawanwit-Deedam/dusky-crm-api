import OrderHistoryModel from '../models/orderHistory.schema.js'

const OrderHistoryService = {
    create: (payload) => {
        return new OrderHistoryModel(payload).save()
    },
    sum: (payload) => {
        return new OrderHistoryModel(payload).save()
    },
    getAll: (query = {}) => {
        return OrderHistoryModel.find(query)
    },
    getPriceCal: (item) => {
        let priceTotal = Array()
        let sum = 0
        for (let i = 0; i < item.length; i++) {
            // let pro = parseInt(item[[i],[1]])
            priceTotal[i] = item[i].priceItem * item[i].quantityItem
        }
        for (let i = 0; i < item.length; i++) {
            // let pro = parseInt(item[[i],[1]])
            sum = sum + priceTotal[i]
        }
        return sum 
    },
    getQuantityCal: (item) => {
        let QuantityTotal = Array()
        let sum = 0
        for (let i = 0; i < item.length; i++) {
            // let pro = parseInt(item[[i],[1]])
            sum = sum + item[i].quantityItem
        }
        return sum 
    },
    getOne: (id) => {
        return OrderHistoryModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return OrderHistoryModel.findOneAndUpdate({ _id: id }, { $set: payload })
    },
    deleteOne: (id) => {
        return OrderHistoryModel.deleteOne({ _id: id })
    }
}

export default OrderHistoryService