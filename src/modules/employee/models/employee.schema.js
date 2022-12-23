import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose

const EmployeeSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{
      type: String,
      required: true
    }, 
    lastname:{
      type: String,
      required: true
    },
    phoneNumber:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true 
    },
    department:{
      type: String,
      required: true
    },
    access:{
      type: Array,
      required: true
    }

}, {timestamps: true })

const EmployeeModel = model('employees', EmployeeSchema)

export default EmployeeModel