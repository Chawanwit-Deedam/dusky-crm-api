import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose


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

const CustomerSchema = new Schema({
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
    phoneNumber:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }, 
    dateOfBirth:{
        type: Date,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    address:{
        type: AddressSchema,
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
    lineId:{
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: false
    },
    username:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: false
    }


}, {timestamps: true })

const CustomerModel = model('customers', CustomerSchema)

export default CustomerModel