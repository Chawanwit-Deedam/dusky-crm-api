import Joi from 'joi'

export const UpdateMembershipDto = Joi.object({
    //id: Joi.string().optional(),
  membershipName: Joi.string().optional(),
  memberShipQuantity: Joi.number().optional(),
  memberShipPrice: Joi.number().optional()
    
})