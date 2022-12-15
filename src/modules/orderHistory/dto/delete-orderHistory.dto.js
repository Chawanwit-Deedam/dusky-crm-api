import Joi from 'joi'

export const DeleteOrderHistoryDto = Joi.object({
  id: Joi.string().optional()
})