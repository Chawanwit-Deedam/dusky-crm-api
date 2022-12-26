import Joi from 'joi'

export const CreateEmployeeDto = Joi.object({
    id: Joi.string().optional(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().required(),
    department: Joi.string().required(),
    access: Joi.array().required()
})