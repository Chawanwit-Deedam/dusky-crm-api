import Joi from 'joi'

export const DeletePromotionDto = Joi.object({
  id: Joi.string().required()
})