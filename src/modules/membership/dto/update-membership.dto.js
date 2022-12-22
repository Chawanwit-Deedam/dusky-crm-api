import Joi from 'joi'

export const UpdateMembershipDto = Joi.object({
    memberShipName: Joi.string().required(),
    memberShipQuantity: Joi.number().required(),
    memberShipPrice: Joi.number().required()
    
})