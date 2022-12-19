import Joi from 'joi'


export const CreateOrderHistoryDto = Joi.object({
    id: Joi.string().optional(),
    customer: {
        idCustomer: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
    },
    item: Joi.array().items({
        //idItem: Joi.string().optional(),
        nameItem: Joi.string().required(),
        quantityItem: Joi.number().required(),
        priceItem: Joi.number().required(),  
        typeItem: Joi.string().required()
    }),
    // order: {
    //     idItem: Joi.string().required(),
    //     nameItem: Joi.string().required(),
    //     quantityItem: Joi.number().required(),
    //     priceItem: Joi.number().required()
    // },
    orderQuantityTotal: Joi.number().optional(),
    orderPriceTotal: Joi.number().optional(),
    orderRepeatType: Joi.array().optional(),
    dateOfbuy: Joi.date().required(),
    deliveryStatus: Joi.string().required(),
    idPromotion: Joi.string().required(),
    payment: Joi.string().required()

})