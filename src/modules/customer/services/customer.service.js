import CustomerModel from '../models/customer.schema.js'

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
    updateOne: (id, payload) => {
        return CustomerModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return CustomerModel.deleteOne({_id: id})
    } 
}

export default CustomerService