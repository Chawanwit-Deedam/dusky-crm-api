import Joi from 'joi'

export const DeleteItemDto = Joi.object({
  id: Joi.string().optional()
})