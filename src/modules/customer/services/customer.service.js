import CustomerModel from '../models/customer.schema.js'
import MembershipModel from '../../membership/models/membership.schema.js'
import OrderHistoryModel from '../../orderHistory/models/orderHistory.schema.js'

const CustomerService = {
    create: (payload) => {
        return new CustomerModel(payload).save()
    },
    getAll:(query = {}) => {
        return CustomerModel.find(query)
    },
    getOne:(id) => {
        return CustomerModel.findOne({ _id: id })
    },

    getIdCustomerLevel: async (id) => {
        const customerModel = await CustomerModel.findOne({ _id: id })

        return {customerModel}

    },
    updateOne: (id, payload) => {
        return CustomerModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return CustomerModel.deleteOne({_id: id})
    },
    getLevel: async ( query = {} ) => {
        const allCustomer = await CustomerModel.find( )
        const levelCustomer = await MembershipModel.find( )
        
        let idCustomer
        let levelForCustomer
        //return allCustomer.length
        let showCustomer = Array()
        for (let i = 0; i < allCustomer.length; i++) {
          idCustomer = await OrderHistoryModel.find({ 'customer.idCustomer': allCustomer[i]._id })
          let oneCustomer = allCustomer[i]
          let totalquantityItem = 0
          let totalpriceItem = 0

          for (let i = 0; i < idCustomer.length; i++) {
            totalquantityItem += idCustomer[i].orderQuantityTotal
            totalpriceItem += idCustomer[i].orderPriceTotal
          }
          
          for(let i=0; i < levelCustomer.length; i++){
            if(totalquantityItem >= levelCustomer[i].memberShipQuantity && totalpriceItem >= levelCustomer[i].memberShipPrice){
              levelForCustomer=levelCustomer[i].memberShipName
            }
            else if(totalquantityItem >= levelCustomer[i].memberShipQuantity && totalpriceItem <= levelCustomer[i].memberShipPrice){
              levelForCustomer=levelCustomer[i].memberShipName 
              break;
            }
            else if(totalquantityItem <= levelCustomer[i].memberShipQuantity && totalpriceItem >= levelCustomer[i].memberShipPrice){
              levelForCustomer=levelCustomer[i].memberShipName
              break;
            }
            else if(totalquantityItem <= levelCustomer[i].memberShipQuantity && totalpriceItem <= levelCustomer[i].memberShipPrice){
              levelForCustomer=levelCustomer[i].memberShipName
              break;
            }
          }

          showCustomer.push({
            oneCustomer,
            levelForCustomer

          })
        }
          return showCustomer
      }, 
}

export default CustomerService

// return CustomerModel.find({_id: {$in: query}})