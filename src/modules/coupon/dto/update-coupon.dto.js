import Joi from 'joi'

export const UpdateCouponDto = Joi.object({
  couponName: Joi.string().required(),
    couponCode: Joi.string().required(),
    couponDiscount:({
      typeDiscountCoupon: Joi.boolean().required(),
      numberDiscountBath: Joi.number().required(),
      numberDiscountPercent: Joi.number().optional().default(0) 
    }),
    couponItemType: Joi.string().required(),
    couponMinimumPurchase: Joi.number().required(),
    couponTargetGroup:({
      targetPriceTotal:({
        value: Joi.string().required(),
        numberBetween1: Joi.number().optional().default(0),
        numberBetween2: Joi.number().optional().default(0),
        numberMoreThan: Joi.number().optional().default(0),
        numberLessThan: Joi.number().optional().default(0),
      }),
      targetAge:({
        value: Joi.string().required(),
        numberBetween1: Joi.number().optional().default(0),
        numberBetween2: Joi.number().optional().default(0),
        numberMoreThan: Joi.number().optional().default(0),
        numberLessThan: Joi.number().optional().default(0),
      }), 
      targetSex: Joi.array().required(),
      targetDateOfBirth: Joi.array().required(),
      targetLevelCustomer: Joi.array().required(),
      targetLostUse: Joi.number().required()
    }),
    couponNumberCanUse: Joi.number().required(),
    couponDateStart: Joi.date().required(),
    couponDateEnd: Joi.date().required()
})