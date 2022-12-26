import CouponModel from "../models/coupon.shema.js"

const CouponService = {
    create: (payload) => {
        return new CouponModel(payload).save()
    },
    getAll:(query = {}) => {
        return CouponModel.find(query)
    },
    getOne:(id) => {
        return CouponModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return CouponModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return CouponModel.deleteOne({_id: id})
    } 
}

export default CouponService