import OrderHistoryModel from '../models/orderHistory.schema.js'

const OrderHistoryService = {
    create: (payload) => {
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
    getOne: (id) => {
        return OrderHistoryModel.findOne({ _id: id })
    },
    getRepeat: async (id) => {
        let count = 0
        const customerId = await OrderHistoryModel.find({'customer.idCustomer': id})
        // for (let i = 0; i < customerId.length; i++) {
        //     count += 1
        // }

        //const CCC = customerId.dateOfbuy

        return {count: customerId.length}
        // return OrderHistoryModel.find({ _id: id })
    },
    updateOne: (id, payload) => {
        return OrderHistoryModel.findOneAndUpdate({ _id: id }, { $set: payload })
    },
    deleteOne: (id) => {
        return OrderHistoryModel.deleteOne({ _id: id })
    }
}

export default OrderHistoryService