import mongoose from '../../../common/database/mongoose.db.js'


const { Schema, model} = mongoose

const MembershipSchema = new Schema({
    memberShipName:{
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

}, {timestamps: true })

const MembershipModel = model('memberships', MembershipSchema)

export default MembershipModel