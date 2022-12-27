import Joi from 'joi'

export const DeleteExecutiveDto = Joi.object({
  id: Joi.string().optional()
})