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

    getSearchTarget: async (req, res) =>{
      
        const couponCustomer = await CouponService.getCustomerCoupon()
        res.status(200).json({
            success: true,
            data: couponCustomer
        })
    },


    createCoupon: async (req, res) => {
        try{
          const { couponName, couponCode, couponDiscount, couponItemType, couponMinimumPurchase, couponTargetGroup, couponNumberCanUse, couponDateStart, couponDateEnd } = req.body
          const created = await CouponService.create({ couponName, couponCode, couponDiscount, couponItemType, couponMinimumPurchase, couponTargetGroup, couponNumberCanUse, couponDateStart, couponDateEnd })
        
          res.status(201).json({
            success: true,
            data: created
          })
        }catch(error){
          res.status(400).json({
            success: false,
            data: error
          })
          console.log(error)
        }
        ///const id = req.body.id
    },
    updateCoupon: async (req, res) =>{
      try{
        const { id } = req.params
        const { couponName, couponCode, couponDiscount, couponItemType, couponMinimumPurchase, couponTargetGroup, couponNumberCanUse, couponDateStart, couponDateEnd } = req.body
        const updated = await CouponService.updateOne(id, { couponName, couponCode, couponDiscount, couponItemType, couponMinimumPurchase, couponTargetGroup, couponNumberCanUse, couponDateStart, couponDateEnd })
        
        res.status(200).json({
            success: true,
            data: updated
        })
      }catch(error){
        res.status(400).json({
          success: false,
          data: error
        })
        console.log(error);
      }

    },
    deleteCouponById: async (req, res) => {
      try{
        const { id } = req.params
        const coupon = await CouponService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: coupon
        })
      }catch(error){
        res.status(400).json({
          success: false,
          data: error 
        })
        console.log(error);
      }
    },
}
export default CouponController