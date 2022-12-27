import EmployeeService from '../services/employee.service.js'
const EmployeeController = {
    getEmployee: async (req, res) =>{
        const employee = await EmployeeService.getAll()

        res.status(200).json({
            success: true,
            data: employee
        })
    },
    getEmployeeById: async (req, res) => {
        const { id } = req.params
        const employee = await EmployeeService.getOne(id)

        res.status(200).json({
            success: true,
            data: employee
        })
    },

    createEmployee: async (req, res) => {
        ///const id = req.body.id
        const { username, password, firstname, lastname, phoneNumber, email, department } = req.body
        const created = await EmployeeService.create({ username, password, firstname, lastname, phoneNumber, email, department })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateEmployee: async (req, res) =>{
        const { id } = req.params
        const { username, password, firstname, lastname, phoneNumber, email, department } = req.body
        const updated = await EmployeeService.updateOne(id, { username, password, firstname, lastname, phoneNumber, email, department })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteEmployeeById: async (req, res) => {
        const { id } = req.params
        const employee = await EmployeeService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: employee
        })
    },
}
export default EmployeeController