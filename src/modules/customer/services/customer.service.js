import { query } from 'express'
import CustomerModel from '../models/customer.schema.js'
import OrderHistoryModel from '../../orderHistory/models/orderHistory.schema.js'

const CustomerService = {
    create: (payload) => {
        return new CustomerModel(payload).save()
    },
    getAll:(query = {}) => {
        return CustomerModel.find(query)
    },
    getSome:(query = {}) => {
        return CustomerModel.find({_id: {$in: query}})
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
    }
}

export default CustomerService