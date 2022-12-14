import Joi from 'joi'

export const UpdateItemDto = Joi.object({
    itemName: Joi.string().required(),
    itemPrice: Joi.number().required(),
    itemQuantity: Joi.number().required(),
    itemType: Joi.string().required(),
    
})