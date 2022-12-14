import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose

const OrderHistorySchema = new Schema({
    orderPriceTotal:{
        type: Number,
        required: true
    }

}, {timestamps: true })

const OrderHistoryModel = model('orderHistory', OrderHistorySchema)

export default OrderHistoryModel