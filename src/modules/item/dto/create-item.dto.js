import Joi from 'joi'

export const CreateItemDto = Joi.object({
    id: Joi.string().optional(),
    itemImageUrl: Joi.string().required(),
    itemName: Joi.string().required(),
    itemPrice: Joi.number().required(),
    itemType: Joi.string().required()
})