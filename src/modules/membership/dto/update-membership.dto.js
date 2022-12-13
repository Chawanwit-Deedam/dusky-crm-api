import Joi from 'joi'

export const UpdateMembershipDto = Joi.object({
    membershipName: Joi.string().required(),
    marking: Joi.string().required()
    
})