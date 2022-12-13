import Joi from 'joi'

export const UpdateCampaignDto = Joi.object({
    id: Joi.string().optional(),
    campaignModel: Joi.string().required(),
    campaignStartDate: Joi.date().required(),
    campaignEndDate: Joi.date().required(),
    


})