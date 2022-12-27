import Joi from 'joi'

export const DeleteCouponDto = Joi.object({
  id: Joi.string().optional()
})