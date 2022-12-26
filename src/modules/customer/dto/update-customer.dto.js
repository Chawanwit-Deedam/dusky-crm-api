import Joi from 'joi'

export const UpdateCustomerDto = Joi.object({
    profileImageUrl: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    sex: Joi.string().required(),
    address:({
        province: Joi.string().required(),
        district: Joi.string().required(),
        subDistrict: Joi.string().required(),
        homeAddress: Joi.string().required(),
        postcode: Joi.string().required(),
    }),
    job: Joi.string().required(),
    income: Joi.number().required(),
    lineId: Joi.string().required(),
    facebook: Joi.string().required(),
    instagram: Joi.string().optional(),
    username: Joi.string().optional(),
    password: Joi.string().optional()
})

