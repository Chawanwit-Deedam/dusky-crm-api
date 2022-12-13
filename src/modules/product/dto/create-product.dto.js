import Joi from 'joi'

export const CreateProductDto = Joi.object({
    id: Joi.string().optional(),
    productType: Joi.string().required(),
    productName: Joi.string().required(),
    productPrice: Joi.string().required()
})