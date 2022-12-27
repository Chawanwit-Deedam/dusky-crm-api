import Joi from 'joi'

export const CreateExecutiveDto = Joi.object({
    id: Joi.string().optional(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessType: Joi.string().required(),
    address: ({
        province: Joi.string().required(),
        district: Joi.string().required(),
        subDistrict: Joi.string().required(),
        homeAddress: Joi.string().required(),
        postcode: Joi.string().required()
    })
})