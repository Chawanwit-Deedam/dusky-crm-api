import ExecutiveService from "../service/executive.service.js";

const ExecutiveController = {
  getExecutive: async (req, res) => {
    const Executive = await ExecutiveService.getAll()

    res.status(200).json({
      success: true,
      data: Executive
    })
  },
  getExecutiveById: async (req, res) => {
    const { id } = req.params
    const Executive = await ExecutiveService.getOne(id)

    res.status(200).json({
      success: true,
      data: Executive
    })
  },

  createExecutive: async (req, res) => {
    const { username, password, passwordConfirm, email, phoneNumber, businessType, address } = req.body
    

    const created = await ExecutiveService.create({ username, password, passwordConfirm, email, phoneNumber, businessType, address })

    res.status(201).json({
      success: true,
      data: created
    })
  },
  updateExecutive: async (req, res) => {
    const { id } = req.params
    const { username, password, passwordConfirm, email, phoneNumber, businessType, address } = req.body
    const updated = await ExecutiveService.updateOne(id, { username, password, passwordConfirm, email, phoneNumber, businessType, address })

    res.status(200).json({
      success: true,
      data: updated
    })
  },
  deleteExecutiveById: async (req, res) => {
    const { id } = req.params
    const Executive = await ExecutiveService.deleteOne(id)

    res.status(200).json({
      success: true,
      data: Executive
    })
  },

}
export default ExecutiveController