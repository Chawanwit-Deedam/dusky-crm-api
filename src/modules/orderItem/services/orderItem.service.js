import OrderItemModel from "../models/orderItem.schema.js";

const OrderItemService = {
    create: (payload) => {
        return new OrderItemModel(payload).save()
    },
    getAll:(query = {}) => {
        return OrderItemModel.find(query)
    },
    getSumItem:(query = {}) => {
        return OrderItemModel.aggregate(
            [
              {
                $group : { 
                    _id : "$order_list", 
                    sumItem: { $sum: { $multiply: [ "$itemQuantity", "$itemPrice" ] } }, 
                    count: { $sum: 1 }
                }  
              }
            ]
         )
    },
    getOne:(id) => {
        return OrderItemModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return OrderItemModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return OrderItemModel.deleteOne({_id: id})
    } 
}

export default OrderItemService