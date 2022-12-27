import Joi from 'joi'

export const UpdateEmployeeDto = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().required(),
  department: Joi.string().required()
    
})