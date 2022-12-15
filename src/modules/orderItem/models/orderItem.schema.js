import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose

const OrderItemSchema = new Schema({
    orderItem:{
        type: Array,
        required: true
    },
    sumOrder:{
        type: Number,
        required: true
    }
}, {timestamps: false })

const OrderItemModel = model('orderitem', OrderItemSchema)

export default OrderItemModel