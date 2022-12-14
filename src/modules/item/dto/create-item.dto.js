import Joi from 'joi'

export const CreateItemDto = Joi.object({
    id: Joi.string().optional(),
    itemName: Joi.string().required(),
    itemPrice: Joi.number().required(),
    itemQuantity: Joi.number().required(),
    itemType: Joi.string().required(),
})