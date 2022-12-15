import mongoose from '../../../common/database/mongoose.db.js'


const { Schema, model} = mongoose


const AddressSchema = new Schema({
    subDistrict:{
        type: String,
        require: true
    },
    district:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    }
}, 
{
    timestamps: false,
    _id: false,
    strict: true
})

const CustomerSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profileImageUrl:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    address:{
        type: AddressSchema,
        required: true
    },
    email:{
        type: String,
        required: true
    }, 
    job: {
        type: String,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    }


}, {timestamps: true })

const CustomerModel = model('customers', CustomerSchema)

export default CustomerModel