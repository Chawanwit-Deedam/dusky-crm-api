import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose

const AddressSchema = new Schema({
    province:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    subDistrict:{
        type: String,
        require: true
    },
    homeAddress:{
        type: String,
        required: true
    },
    postcode:{
        type: String,
        required: true
    },
    postcode:{
        type: String,
        require: true
    },
}, 
{
    timestamps: false,
    _id: false,
    strict: true
})

const ExecutiveSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    passwordConfirm: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    businessType: {
      type: String,
      required: true
    },
    address: {
      type: AddressSchema,
      required: true
    }
  
  }, { timestamps: true })
  
  const ExecutiveModel = model('employees', ExecutiveSchema)
  
  export default ExecutiveModel