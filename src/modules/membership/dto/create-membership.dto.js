import Joi from 'joi'

export const CreateMembershipDto = Joi.object({
    id: Joi.string().optional(),
    membershipName: Joi.string().required(),
    marking: Joi.string().required()
})