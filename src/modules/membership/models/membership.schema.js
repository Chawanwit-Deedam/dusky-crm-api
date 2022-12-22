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

<<<<<<< HEAD
}, {timestamps: true })
=======


}, 
{
    timestamps: false,
    _id: false,
    strict: true
})
>>>>>>> dev

const MembershipModel = model('memberships', MembershipSchema)

export default MembershipModel