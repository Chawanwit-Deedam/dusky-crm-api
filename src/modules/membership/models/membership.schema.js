import mongoose from '../../../common/database/mongoose.db.js'


const { Schema, model} = mongoose

const MembershipSchema = new Schema({
    memberShipName:{
        type: String,
        required: true
    },
    memberShipColor:{
        type: String,
        required: true
    },
    memberShipQuantity:{
        type: Number,
        required: true
    },
    memberShipPrice:{
        type: Number,
        required: true
    }
}, 
{
    timestamps: false
})

const MembershipModel = model('memberships', MembershipSchema)

export default MembershipModel