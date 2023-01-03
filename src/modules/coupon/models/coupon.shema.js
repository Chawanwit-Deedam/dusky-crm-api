import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose

const CouponDiscountSchema = new Schema({
  typeDiscountCoupon:{
      type: Boolean,
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



const CouponTargetPriceTotalSchema = new Schema({
  value:{
      type: String,
      require: true
  },
  numberBetween1:{
      type: Number,
      required: true
  },
  numberBetween2:{
      type: Number,
      required: true
  },
  numberMoreThan:{
    type: Number,
    required: true
  },
  numberLessThan:{
    type: Number,
    required: true
  }
}, 
{
  timestamps: false,
  _id: false,
  strict: true
})


const CouponTargetAgeSchema = new Schema({
  value:{
      type: String,
      require: true
  },
  numberBetween1:{
      type: Number,
      required: true
  },
  numberBetween2:{
      type: Number,
      required: true
  },
  numberMoreThan:{
    type: Number,
    required: true
  },
  numberLessThan:{
    type: Number,
    required: true
  }
}, 
{
  timestamps: false,
  _id: false,
  strict: true
})


const CouponTargetGroupSchema = new Schema({
  targetPriceTotal:{
      type: CouponTargetPriceTotalSchema,
      require: true
  },
  targetAge:{
      type: CouponTargetAgeSchema, 
      required: true
  },
  targetSex:{
      type: Array,
      required: true
  },
  targetDateOfBirth:{
    type: Array,
    required: true
  },
  targetLevelCustomer:{
    type: Array,
    required: true
  },
  targetLostUse:{
    type: Number
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
    couponItemType:{
      type: String,
      required: true
    },
    couponMinimumPurchase:{
      type: Number,
      required: true
    },
    couponTargetGroup:{
      type: CouponTargetGroupSchema,
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