import Joi from 'joi'

export const UpdateItemDto = Joi.object({
    itemImageUrl: Joi.string().required(),
    itemName: Joi.string().required(),
    itemPrice: Joi.number().required(),
    itemType: Joi.string().required()
    
})