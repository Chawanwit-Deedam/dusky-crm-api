import MembershipModel from '../models/membership.schema.js'

const MembershipService = {
    create: (payload) => {
        return new MembershipModel(payload).save()
    },
    getAll:(query = {}) => {
        return MembershipModel.find(query)
    },
    getOne:(id) => {
        return MembershipModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return MembershipModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return MembershipModel.deleteOne({_id: id})
    } 
}

export default MembershipService