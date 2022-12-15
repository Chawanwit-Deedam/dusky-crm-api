import Joi from 'joi'

export const UpdateOrderHistoryDto = Joi.object({
  customer: {
    idCustomer: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
  },
  order: Joi.array().required(),
// order: {
//     idItem: Joi.string().required(),
//     nameItem: Joi.string().required(),
//     quantityItem: Joi.number().required(),
//     priceItem: Joi.number().required()
// },
  orderPriceTotal: Joi.number().required(),
  dateOfbuy: Joi.date().required(),
  deliveryStatus: Joi.string().required(),
  idPromotion: Joi.string().required(),
  payment: Joi.string().required()
})

