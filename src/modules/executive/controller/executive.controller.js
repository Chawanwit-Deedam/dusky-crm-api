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
  checkExecutiveById: async (req, res) => {
    const { username, password } = req.body
    const Executive = await ExecutiveService.checkID(username, password)

    res.status(200).json({
      success: true,
      data: Executive
    })
  },
  createExecutive: async (req, res) => {
    const { username, password, passwordConfirm, phoneNumber, email, businessName, businessType, address } = req.body
    const confirm = ExecutiveService.confirmPassword(password, passwordConfirm)
    if (confirm == true) {
      const created = await ExecutiveService.create({ username, password, phoneNumber, email, businessName, businessType, address })
      res.status(201).json({
        success: true,
        data: created
      })
    } else {
      res.status(201).json({
        success: false,
        data: null
      })
    }
  },
  updateExecutive: async (req, res) => {
    const { id } = req.params
    const { currentPassword, password, passwordConfirm } = req.body
    
    const Executive = await ExecutiveService.getOne(id)
    const check = ExecutiveService.checkPassword( Executive, currentPassword )
    const confirm = ExecutiveService.confirmPassword(password, passwordConfirm)
    //const updated = await ExecutiveService.updateOne(id, { password, passwordConfirm })

    res.status(200).json({
      success: true,
      data: {check, confirm}
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