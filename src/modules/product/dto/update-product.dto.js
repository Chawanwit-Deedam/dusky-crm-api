import Joi from 'joi'

export const UpdateProductDto = Joi.object({
    productType: Joi.string().optional(),
    productName: Joi.string().optional(),
    productPrice: Joi.string().optional()
    
})