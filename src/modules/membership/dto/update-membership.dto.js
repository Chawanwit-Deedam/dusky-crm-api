import Joi from 'joi'

export const UpdateMembershipDto = Joi.object({
<<<<<<< HEAD
    memberShipName: Joi.string().required(),
    memberShipQuantity: Joi.number().required(),
    memberShipPrice: Joi.number().required()
=======
    //id: Joi.string().optional(),
  membershipName: Joi.string().optional(),
  memberShipQuantity: Joi.number().optional(),
  memberShipPrice: Joi.number().optional()
>>>>>>> dev
    
})