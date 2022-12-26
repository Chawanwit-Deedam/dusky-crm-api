import Joi from 'joi'

export const UpdateCouponDto = Joi.object({
  couponName: Joi.string().required(),
    couponCode: Joi.string().required(),
    couponDiscount:({
      typeDiscountCoupon: Joi.string().required(),
      numberDiscountBath: Joi.number().required(),
      numberDiscountPercent: Joi.number().optional().default(0)
    }),
    couponItemTypeParticipating: Joi.array().required(),
    couponNumberCanUse: Joi.number().required(),
    couponDateStart: Joi.date().required(),
    couponDateEnd: Joi.date().required()
})