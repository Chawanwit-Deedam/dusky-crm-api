import Joi from 'joi'

export const CreateMembershipDto = Joi.object({
    id: Joi.string().optional(),
    memberShipName: Joi.string().required(),

    memberShipQuantity: Joi.number().required(),
    memberShipPrice: Joi.number().required()
})