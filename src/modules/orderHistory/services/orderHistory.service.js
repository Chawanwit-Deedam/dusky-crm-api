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
    getCumulativeAmount: (item) => {
      if(Array.isArray(item)){
        let priceTotal = Array()
        let sumPrice = 0
        let sumQuantity = 0
        const repeatType = []
        for (let i = 0; i < item.length; i++) {
                // let pro = parseInt(item[[i],[1]])
          sumPrice += item[i].priceItem * item[i].quantityItem
          sumQuantity += item[i].quantityItem
          if(item[i].typeItem){
            repeatType.push(item[i].typeItem)
          }
        }
            // sum = item.reduce((acc, curr) => {
            //     return acc +=  curr.priceItem * curr.quantityItem
            // },0)
        return { sumPrice, sumQuantity, repeatType } 
      }
        return null
    },
    getQuantityCal: (item) => {
      if(Array.isArray(item)){
        let QuantityTotal = Array()
        let sum = 0
            // for (let i = 0; i < item.length; i++) {
            //     // let pro = parseInt(item[[i],[1]])
            //     sum += item[i].quantityItem
            // }
        sum = item.reduce((acc, curr) => {
          return acc += curr.quantityItem
        },0)
        return sum 
      }
      return null
    },
    getRepeatType: (item) => {
      let RepeatType = Array()
      for (let i = 0; i < item.length; i++){
        if(item[i].typeItem){
          RepeatType.push(item[i].typeItem)
        }
      }
      return RepeatType    
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