import Joi from 'joi'

export const CreatePromotionDto = Joi.object({
    id: Joi.string().optional(),
    promotionModel: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required()
})