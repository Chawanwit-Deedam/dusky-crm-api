import CustomerService from '../services/customer.service.js'
import OrderHistoryService from '../../orderHistory/services/orderHistory.service.js'
const CustomerController = {
    getCustomer: async (req, res) =>{
        const customer = await CustomerService.getAll()
        res.status(200).json({
            success: true,
            data: customer
        })
    },
    getCustomerById: async (req, res) => {
        const { id } = req.params
        const customer = await CustomerService.getIdCustomerLevel(id)

        res.status(200).json({  
            success: true,
            data: customer
        })
    },

    getCustomerLevel: async (req, res) => {
        const { id } = req.params
        const customerlevelMember = await CustomerService.getIdCustomerLevel(id)
        const levelCustomer = await OrderHistoryService.getLevel(id)
        res.status(200).json({
            success: true,
            data: {
                customer: customerlevelMember,
                detail: levelCustomer
            }
        })
    },

    createCustomer: async (req, res) => {
        ///const id = req.body.id
        const { profileImageUrl, firstName, lastName, phoneNumber, email, dateOfBirth, sex, address, job, income, lineId, facebook, instagram, username, password } = req.body
        const created = await CustomerService.create({ profileImageUrl, firstName, lastName, phoneNumber, email, dateOfBirth, sex, address, job, income, lineId, facebook, instagram, username, password })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateCustomer: async (req, res) =>{
        const { id } = req.params
        const { profileImageUrl, firstName, lastName, phoneNumber, email, dateOfBirth, sex, address, job, income, lineId, facebook, instagram, username, password } = req.body
        const updated = await CustomerService.updateOne(id, { profileImageUrl, firstName, lastName, phoneNumber, email, dateOfBirth, sex, address, job, income, lineId, facebook, instagram, username, password })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCustomerById: async (req, res) => {
        const { id } = req.params
        const customer = await CustomerService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: customer
        })
    },
}
export default CustomerController