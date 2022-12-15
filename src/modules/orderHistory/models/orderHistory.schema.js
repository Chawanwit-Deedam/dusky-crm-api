import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose

const OrderHistorySchema = new Schema({

    customer: {
        type: Object,
        required: true
    },
    order: {
        type: Object,
        required: true
    },
    orderPriceTotal:{
        type: Number,
        required: true
    },
    dateOfbuy:{
        type: Date,
        required: true
    },
    deliveryStatus: {
        type: String,
        required: true
    },
    idPromotion: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    }

}, {timestamps: true })

const OrderHistoryModel = model('orderHistory', OrderHistorySchema)

export default OrderHistoryModel