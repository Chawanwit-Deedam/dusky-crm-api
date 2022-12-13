import CustomerService from '../services/customer.service.js'
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
        const customer = await CustomerService.getOne(id)

        res.status(200).json({
            success: true,
            data: customer
        })
    },

    createCustomer: async (req, res) => {
        ///const id = req.body.id
        const { username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income} = req.body
        const created = await CustomerService.create({ username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateCustomer: async (req, res) =>{
        const { id } = req.params
        const { username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income} = req.body
        const updated = await CustomerService.updateOne(id, { username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCustomerById: async (req, res) => {
        const { id } = req.body
        const customer = await CustomerService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: customer
        })
    },
}
export default CustomerController