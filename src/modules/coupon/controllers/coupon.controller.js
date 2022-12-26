import CouponService from '../services/coupon.services.js'

const CouponController = {
    getCoupon: async (req, res) =>{
        const coupon = await CouponService.getAll()

        res.status(200).json({
            success: true,
            data: coupon
        })
    },
    getCouponById: async (req, res) => {
        const { id } = req.params
        const coupon = await CouponService.getOne(id)

        res.status(200).json({
            success: true,
            data: coupon
        })
    },

    createCoupon: async (req, res) => {
        ///const id = req.body.id
        const { couponName, couponCode, couponDiscount, couponItemTypeParticipating, couponNumberCanUse, couponDateStart, couponDateEnd } = req.body
        const created = await CouponService.create({ couponName, couponCode, couponDiscount, couponItemTypeParticipating, couponNumberCanUse, couponDateStart, couponDateEnd })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateCoupon: async (req, res) =>{
        const { id } = req.params
        const { couponName, couponCode, couponDiscount, couponItemTypeParticipating, couponNumberCanUse, couponDateStart, couponDateEnd } = req.body
        const updated = await CouponService.updateOne(id, { couponName, couponCode, couponDiscount, couponItemTypeParticipating, couponNumberCanUse, couponDateStart, couponDateEnd })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCouponById: async (req, res) => {
        const { id } = req.params
        const coupon = await CouponService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: coupon
        })
    },
}
export default CouponController