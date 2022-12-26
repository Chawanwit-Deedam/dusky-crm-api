import EmployeeModel from "../models/employee.schema.js"

const EmployeeService = {
    create: (payload) => {
        return new EmployeeModel(payload).save()
    },
    getAll:(query = {}) => {
        return EmployeeModel.find(query)
    },
    getOne:(id) => {
        return EmployeeModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return EmployeeModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return EmployeeModel.deleteOne({_id: id})
    } 
}

export default EmployeeService