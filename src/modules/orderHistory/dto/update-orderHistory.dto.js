import Joi from 'joi'

export const UpdateOrderHistoryDto = Joi.object({
  id: Joi.string().optional(),
  orderPriceTotal: Joi.number().optional().default(0),
  dateOfOrder: Joi.date().required(),
  orderType: Joi.string().required()
})

