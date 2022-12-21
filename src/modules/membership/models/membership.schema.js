  import mongoose from '../../../common/database/mongoose.db.js'


const { Schema, model} = mongoose

const MembershipSchema = new Schema({
    membershipName:{
        type: String,
        required: true
    },
    marking:{
        type: String,
        required: true
    }



}, {timestamps: true })

const MembershipModel = model('memberships', MembershipSchema)

export default MembershipModel