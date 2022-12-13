import Joi from 'joi'

export const DeleteCustomerDto = Joi.object({
  id: Joi.string().required()
})