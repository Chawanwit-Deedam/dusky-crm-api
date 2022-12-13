import Joi from 'joi'

export const UpdateCustomerDto = Joi.object({
    username: Joi.string().optional(),
    password: Joi.string().optional(),
    profileImageUrl: Joi.string().optional(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    sex: Joi.string().optional(),
    dateOfBirth: Joi.date().optional(),
    phoneNumber: Joi.string().optional(),
    address:({
        subDistrict: Joi.string().optional(),
        district: Joi.string().optional(),
        province: Joi.string().optional(),
    }),
    
    email: Joi.string().optional(),
    job: Joi.string().required(),
    income: Joi.number().optional().default(0)
})

