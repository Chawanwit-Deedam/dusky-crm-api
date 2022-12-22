import Joi from 'joi'

export const CreateMembershipDto = Joi.object({
    id: Joi.string().optional(),
<<<<<<< HEAD
    membershipName: Joi.string().required(),
=======
    memberShipName: Joi.string().required(),
>>>>>>> dbda108 (add membership)
    memberShipQuantity: Joi.number().required(),
    memberShipPrice: Joi.number().required()
})