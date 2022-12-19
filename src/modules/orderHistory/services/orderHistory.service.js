import OrderHistoryModel from '../models/orderHistory.schema.js'

const OrderHistoryService = {
    create: (payload) => {
        return new OrderHistoryModel(payload).save()
    },
    getAll: (query = {}) => {
        return OrderHistoryModel.find(query)
    },
    getCumulativeAmount: (item) => {
        if (Array.isArray(item)) {
            let priceTotal = Array()
            let sumPrice = 0
            let sumQuantity = 0
            const repeatType = []
            for (let i = 0; i < item.length; i++) {
                // let pro = parseInt(item[[i],[1]])
                sumPrice += item[i].priceItem * item[i].quantityItem
                sumQuantity += item[i].quantityItem
                if (item[i].typeItem) {
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

        const customerId = await OrderHistoryModel.find({ 'customer.idCustomer': id })
        let count = customerId.length
        //customer 
        let cusTomer = customerId[0].customer

        let A = [] //[customerId[0].item[0].nameItem],[0] [''],[0]
        for (let i = 0; i < customerId.length; i++) {
            for (let j = 0; j < customerId[i].item.length; j++) {
                A.push(customerId[i].item[j])
                //allItem.push[customerId[i].item[j].nameItem]
                    //[customerId[i].item[j].quantityItem]
            }
        }
        let B = [...(new Set(A.map(({ nameItem }) => nameItem)))];
        let BB = B.length
        let allItem = []
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < B.length; j++) {
                
                allItem.push({
                    nameItem: A[i].nameItem
                })
                
            }
        }
            // if (i > 0) {
            //      for (let j = 0; j < allItem.length; j++) {
            //         if(allItem[j] !== A[i].nameItem){
            //             allItem.push({
            //                 nameItem: A[i].nameItem
            //             })
            //         }
            //      }
            // }
            // allItem.push({
            //     nameItem: A[i].nameItem
            // })
    
        //จำนวนสินค้าทั้งหมดที่เคยซื้อ ยอดซื้อทั้งหมดที่เคยซื้อ
        let totalquantityItem = 0
        let totalpriceItem = 0
        for (let i = 0; i < customerId.length; i++) {
            totalquantityItem += customerId[i].orderQuantityTotal
            totalpriceItem += customerId[i].orderPriceTotal
        }
        // for (let i = 0; i < customerId.length; i++) {
        //     if(customerId[i].typeItem){
        //         allItem.push(item[i].typeItem)
        //     }    
        // }
        // for (let i = 0; i < customerId.length; i++) {
        //     count += 1
        // }
        //const CCC = customerId.dateOfbuy

        return { count, cusTomer, B, totalquantityItem, totalpriceItem ,}
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