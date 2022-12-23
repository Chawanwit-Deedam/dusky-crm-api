import CustomerService from '../services/customer.service.js'

const CustomerController = {
  getCustomer: async (req, res) => {
    try {
      const customer = await CustomerService.getAll()

      res.status(200).json({
        success: true,
        data: customer
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        data: error
      })
      console.log(error)
    }
  },
  getCustomerLevel: async (req, res) => {
    try {
      const customer = await CustomerService.getLevel()

      res.status(200).json({
        success: true,
        data: customer
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        data: error
      })
      console.log(error)
    }
  },
  getCustomerById: async (req, res) => {
    try {
      const { id } = req.params
      const customer = await CustomerService.getOne(id)

      res.status(200).json({
        success: true,
        data: customer
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        data: error
      })
      console.log(error)
    }
  },

  createCustomer: async (req, res) => {
    try {
      const { username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income, facebook, instagram } = req.body
      const created = await CustomerService.create({ username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income, facebook, instagram })

      res.status(201).json({
        success: true,
        data: created
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        data: error
      })
      console.log(error)
    }
    ///const id = req.body.id
  },
  updateCustomer: async (req, res) => {
    try {
      const { id } = req.params
      const { username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income, facebook, instagram } = req.body
      const updated = await CustomerService.updateOne(id, { username, password, profileImageUrl, firstName, lastName, sex, dateOfBirth, phoneNumber, address, email, job, income, facebook, instagram })

      res.status(200).json({
        success: true,
        data: updated
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        data: error
      })
      console.log(error)
    }
  },
  deleteCustomerById: async (req, res) => {
    try {
      const { id } = req.body
      const customer = await CustomerService.deleteOne(id)

      res.status(200).json({
        success: true,
        data: customer
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        data: error
      })
      console.log(error)
    }
  },
}
export default CustomerController