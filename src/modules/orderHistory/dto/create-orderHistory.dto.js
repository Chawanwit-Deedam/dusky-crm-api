import Joi from 'joi'

export const CreateOrderHistoryDto = Joi.object({
    id: Joi.string().optional(),
    orderPriceTotal: Joi.number().optional().default(0)

})