import PromotionModel from '../models/promotion.schema.js'

const PromotionService = {
    create: (payload) => {
        return new PromotionModel(payload).save()
    },
    getAll:(query = {}) => {
        return PromotionModel.find(query)
    },
    getOne:(id) => {
        return PromotionModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return PromotionModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return PromotionModel.deleteOne({_id: id})
    } 
}

export default PromotionService