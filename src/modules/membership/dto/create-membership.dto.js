import Joi from 'joi'

export const CreateMembershipDto = Joi.object({
    id: Joi.string().optional(),
    membershipName: Joi.string().required(),
    memberShipQuantity: Joi.number().required(),
    memberShipPrice: Joi.number().required()
})