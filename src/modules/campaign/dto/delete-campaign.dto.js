import Joi from 'joi'

export const DeleteCampaignDto = Joi.object({
  id: Joi.string().required()
})