import Joi from 'joi'

export const CreateEmployeeDto = Joi.object({
    id: Joi.string().optional(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessType: Joi.string().required(),
    address: Joi.string().required()
})