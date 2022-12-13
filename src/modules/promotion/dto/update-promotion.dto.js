import Joi from 'joi'

export const UpdatePromotionDto = Joi.object({
    promotionModel: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required()
    
})