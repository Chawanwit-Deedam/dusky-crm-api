import Joi from 'joi'

export const CreateCustomerDto = Joi.object({
    id: Joi.string().optional(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    profileImageUrl: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    sex: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    phoneNumber: Joi.string().required(),
    address:({
        subDistrict: Joi.string().required(),
        district: Joi.string().required(),
        province: Joi.string().required(),
    }),
    email: Joi.string().required(),
    job: Joi.string().required(),
    income: Joi.number().optional().default(0)


})