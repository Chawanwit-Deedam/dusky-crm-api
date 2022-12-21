import OrderHistoryModel from '../models/orderHistory.schema.js'
import CustomerModel from '../../customer/models/customer.schema.js'
import MembershipModel from '../../membership/models/membership.schema.js'
//import CustomerService from '../../customer/services/customer.service.js'

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
    let _id = id
    let customerId = await OrderHistoryModel.find({ 'customer.idCustomer': _id })
    let customerModel = await CustomerModel.findOne({ _id })
    let memberShip = await MembershipModel.find()
    //return memberShip

    if (customerId.length > 0) {
      if ((customerId[0].customer).idCustomer === _id) {
        let count = customerId.length
        //customer 
        let cusTomer = customerId[0].customer //customerModel
        //orderitem
        let orderItem = [] //[customerId[0].item[0].nameItem],[0] [''],[0]ss
        for (let i = 0; i < customerId.length; i++) {
          for (let j = 0; j < customerId[i].item.length; j++) {
            customerId[i].item[j].dateOfbuy = customerId[i].dateOfbuy
            customerId[i].item[j].payment = customerId[i].payment
            orderItem.push(
              customerId[i].item[j]
            )
          }
        }
        let allItemRepeat = []
        let allTypeRepeat = []
        for (let j = 0; j < orderItem.length; j++) {
          //repeat orderitem
          if (orderItem[j].nameItem) {
            const findsort = allItemRepeat.findIndex((items) => items.nameItem === orderItem[j].nameItem)

            if (findsort >= 0) {
              allItemRepeat[findsort].qty += orderItem[j].quantityItem
              allItemRepeat[findsort].totalItem += orderItem[j].priceItem * orderItem[j].quantityItem
            }

            else {
              allItemRepeat.push({
                nameItem: orderItem[j].nameItem,
                qty: orderItem[j].quantityItem,
                totalItem: orderItem[j].priceItem * orderItem[j].quantityItem
              })
            }
          }
          //repeat typeitem
          if (orderItem[j].typeItem) {
            const findsort = allTypeRepeat.findIndex((items) => items.typeItem === orderItem[j].typeItem)

            if (findsort >= 0) {
              allTypeRepeat[findsort].qty += orderItem[j].quantityItem
              allTypeRepeat[findsort].totalType += orderItem[j].priceItem * orderItem[j].quantityItem
            }

            else {
              allTypeRepeat.push({
                typeItem: orderItem[j].typeItem,
                qty: orderItem[j].quantityItem,
                totalType: orderItem[j].priceItem * orderItem[j].quantityItem
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
        //let statusCustomer = "Classic"
        let memberShipcustomer = "Bronze"
        for (let i = 0; i < memberShip.length; i++) {
          if (memberShip[i].memberShipQuantity < totalquantityItem && memberShip[i].memberShipPrice < totalpriceItem) {
            memberShipcustomer = memberShip[i].memberShipName
          }
        }
        return { count, cusTomer, totalquantityItem, totalpriceItem, memberShipcustomer, allItemRepeat, allTypeRepeat, orderItem, }
      }
    } else {
      if (customerModel._id == _id) {
        const cusomerNoOrder = {
          firstName: customerModel.firstName,
          lastName: customerModel.lastName,
          sex: customerModel.sex,
          dateOfbuy: customerModel.dateOfBirth,
          phoneNumber: customerModel.phoneNumber,
          email: customerModel.email,
          job: customerModel.job,
          facebook: customerModel.facebook,
          instagram: customerModel.instagram
        }
        return cusomerNoOrder
      }
      return null
    }

  },
  updateOne: (id, payload) => {
    return OrderHistoryModel.findOneAndUpdate({ _id: id }, { $set: payload })
  },
  deleteOne: (id) => {
    return OrderHistoryModel.deleteOne({ _id: id })
  }
}

export default OrderHistoryService


// let C = []
        // let D = []
        // let sum
        // let oneitem = 0
        // for (let i = 0; i < B.length; i++) {
        //     D.push(allItem.filter(item => item.nameItem === B[i]))
        //     sum = D[i].quantityItem
        //     if(B[i] === D[i].nameItem){
        //          sum = D.length
        //     }
        // }

        // if(allItem.length > 0){
        //     for (let x = 0; x < allItem.length; x++) {
        //         if(allItem[x].nameItem === A[i].nameItem){
        //             break
        //         }

        //     }
        // } else if(allItem.length == 0){
        //     allItem.push({
        //         nameItem: A[i].nameItem,
        //         quantityItem: A[i].quantityItem
        //     })
        // }
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

        // for (let i = 0; i < customerId.length; i++) {
        //     if(customerId[i].typeItem){
        //         allItem.push(item[i].typeItem)
        //     }
        // }
        // for (let i = 0; i < customerId.length; i++) {
        //     count += 1
        // }
        //const CCC = customerId.dateOfbuy

        //let B = [...(new Set(A.map(({ nameItem }) => nameItem)))];
        //let BB = []