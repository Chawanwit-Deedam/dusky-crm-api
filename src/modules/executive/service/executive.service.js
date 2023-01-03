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
    },
    checkID: async ( username, password ) => {
        let executive = await ExecutiveModel.find()
        let statusUser = true
        for (let i = 0; i < executive.length; i++) {
            if((executive[i].username === username) && (executive[i].password === password)){
                return statusUser
            }
        }
        return !statusUser
    },
    confirmPassword: ( password, passwordConfirm ) => {
        if ( password === passwordConfirm ) {
            return true

        } else {
            return false
            
        }
    },
    checkPassword: ( Executive, currentPassword ) => {
        if ( currentPassword === Executive.password ) {
            return true

        } else {
            return false

        }
    }
}

export default ExecutiveService