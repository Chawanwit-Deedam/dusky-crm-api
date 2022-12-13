import Joi from 'joi'

export const DeleteProductDto = Joi.object({
  id: Joi.string().required()
})