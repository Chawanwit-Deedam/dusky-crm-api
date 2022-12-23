import Joi from 'joi'

export const DeleteEmployeeDto = Joi.object({
  id: Joi.string().optional()
})