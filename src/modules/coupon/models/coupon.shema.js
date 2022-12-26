import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose

const CouponDiscountSchema = new Schema({
  typeDiscountCoupon:{
      type: String,
      require: true
  },
  numberDiscountBath:{
      type: Number,
      required: true
  },
  numberDiscountPercent:{
      type: Number,
      required: true
  }
}, 
{
  timestamps: false,
  _id: false,
  strict: true
})


const CouponSchema = new Schema({
    couponName:{
      type: String,
      required: true
    },
    couponCode:{
      type: String,
      required: true
    },
    couponDiscount:{
      type: CouponDiscountSchema,
      required: true 
    },
    couponItemTypeParticipating:{
      type: Array,
      required: true
    },
    couponNumberCanUse:{
      type: Number,
      required: true
    },
    couponDateStart:{
      type: Date,
      required: true
    },
    couponDateEnd:{
      type: Date,
      required: true
    }

}, {timestamps: true }) 

const CouponModel = model('coupons', CouponSchema)

export default CouponModel