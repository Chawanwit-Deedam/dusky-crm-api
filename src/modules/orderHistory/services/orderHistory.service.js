import OrderHistoryModel from '../models/orderHistory.schema.js'
import MembershipModel from '../../membership/models/membership.schema.js'


const OrderHistoryService = {
    create: (payload) => {
        return new OrderHistoryModel(payload).save()
    },
    getAll: (query = {}) => {
        return OrderHistoryModel.find(query)
    },
    getCumulativeAmount: (item) => {
        if (Array.isArray(item) && item[0].typeItem) {
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
        if(Array.isArray(customerId) && customerId[0].customer){
            
            
            let cusTomer = customerId[0].customer
            //orderitem
            let orderItem = [] //[customerId[0].item[0].nameItem],[0] [''],[0]
            for (let i = 0; i < customerId.length; i++) {
                for (let j = 0; j < customerId[i].item.length; j++) {   
                    orderItem.push(customerId[i].item[j])
                    //allItem.push[customerId[i].item[j].nameItem]
                    //[customerId[i].item[j].quantityItem]
                }
            }
            //let B = [...(new Set(A.map(({ nameItem }) => nameItem)))];
            //let BB = []
            let allItemRepeat = []
            let allTypeRepeat = []
            for (let j = 0; j < orderItem.length; j++) {
                //repeat orderitem
                if(orderItem[j].nameItem){
                    const findsort = allItemRepeat.findIndex((items) => items.nameItem === orderItem[j].nameItem) 
                
                    if(findsort >= 0) {
                        allItemRepeat[findsort].qty += orderItem[j].quantityItem
                    }
    
                    else {
                        allItemRepeat.push({
                            nameItem: orderItem[j].nameItem,
                            qty: orderItem[j].quantityItem
                        })
                    }
                }
                //repeat typeitem
                if(orderItem[j].typeItem){
                    const findsort = allTypeRepeat.findIndex((items) => items.typeItem === orderItem[j].typeItem) 
                    
                    if(findsort >= 0) {
                        allTypeRepeat[findsort].qty += orderItem[j].quantityItem
                    }
    
                    else {
                        allTypeRepeat.push({
                            typeItem: orderItem[j].typeItem,
                            qty: orderItem[j].quantityItem
                        })
                    }
                }
            } 
            //จำนวนสินค้าทั้งหมดที่เคยซื้อ ยอดซื้อทั้งหมดที่เคยซื้อ
            let totalquantityItem = 0
            let totalpriceItem = 0
            for (let i = 0; i < customerId.length; i++) {
                totalquantityItem += customerId[i].orderQuantityTotal
                totalpriceItem += customerId[i].orderPriceTotal
            }
    
            return { count, cusTomer, totalquantityItem, totalpriceItem, allItemRepeat, allTypeRepeat, orderItem }
        }
        return null
    },
    getLevel: async (id, query = {}) => {
        const idCustomer = await OrderHistoryModel.find({ 'customer.idCustomer': id })
        if(Array.isArray(idCustomer) && idCustomer[0].customer){
            let totalquantityItem = 0
            let totalpriceItem = 0
            let levelMemberShip = []
            let levelForCustomer 
            for (let i = 0; i < idCustomer.length; i++) {
                totalquantityItem += idCustomer[i].orderQuantityTotal
                totalpriceItem += idCustomer[i].orderPriceTotal
            }
            const levelCustomer = await MembershipModel.find(query)
            const countLevelMemberShip = levelCustomer.length
            const customerById = idCustomer[0].customer 
            for(let j=0; j < levelCustomer.length; j++){
                if(levelCustomer[j].memberShipName){
                    levelMemberShip.push({
                        levelName: levelCustomer[j].memberShipName,
                        levelQuantity: levelCustomer[j].memberShipQuantity,
                        levelPrice: levelCustomer[j].memberShipPrice
                    })
                }
            }
            for(let i=0; i < levelMemberShip.length; i++){
              if(totalquantityItem >= levelMemberShip[i].levelQuantity && totalpriceItem >= levelMemberShip[i].levelPrice){
                  levelForCustomer=levelMemberShip[i].levelName
              }
              else if(totalquantityItem >= levelMemberShip[i].levelQuantity && totalpriceItem <= levelMemberShip[i].levelPrice){
                levelForCustomer=levelMemberShip[i].levelName 
                break;
              }
              else if(totalquantityItem <= levelMemberShip[i].levelQuantity && totalpriceItem >= levelMemberShip[i].levelPrice){
                levelForCustomer=levelMemberShip[i].levelName
                break;
              }
              else if(totalquantityItem <= levelMemberShip[i].levelQuantity && totalpriceItem <= levelMemberShip[i].levelPrice){
                levelForCustomer=levelMemberShip[i].levelName
                break;
              }
            }
            return { customerById, totalquantityItem, totalpriceItem, countLevelMemberShip, levelForCustomer}
        }
        return null
    }, 
    updateOne: (id, payload) => {
        return OrderHistoryModel.findOneAndUpdate({ _id: id }, { $set: payload })
    },
    deleteOne: (id) => {
        return OrderHistoryModel.deleteOne({ _id: id })
    }
}

export default OrderHistoryService