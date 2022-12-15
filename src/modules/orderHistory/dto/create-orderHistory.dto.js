import Joi from 'joi'

export const CreateOrderHistoryDto = Joi.object({
    id: Joi.string().optional(),
    idCustomer: Joi.string().required(),
    idOrder: Joi.string().required(),
    orderPriceTotal: Joi.number().required(),
    dateOfbuy: Joi.date().required(),
    deliveryStatus: Joi.string().required(),
    idPromotion: Joi.string().required(),
    payment: Joi.string().required()

})