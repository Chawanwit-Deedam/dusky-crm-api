import ExecutiveModel from "../models/executive.schema.js";

const ExecutiveService = {
    create: (payload) => {
        return new ExecutiveModel(payload).save()
    },
    getAll:(query = {}) => {
        return ExecutiveModel.find(query)
    },
    getOne:(id) => {
        return ExecutiveModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return ExecutiveModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return ExecutiveModel.deleteOne({_id: id})
    } 
}

export default ExecutiveService