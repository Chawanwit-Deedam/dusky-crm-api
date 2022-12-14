import Joi from 'joi'

export const createOrderItemDto = Joi.object({
    id: Joi.string().optional(),
    allitem: Joi.array().required()

    //dateOforder: Joi.date().required()
})    