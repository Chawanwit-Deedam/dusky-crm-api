import Joi from 'joi'

export const DeleteMembershipDto = Joi.object({
  id: Joi.string().optional()
})