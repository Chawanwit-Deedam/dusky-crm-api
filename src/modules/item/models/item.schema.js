import mongoose from '../../../common/database/mongoose.db.js'
const { Schema, model} = mongoose

const ItemSchema = new Schema({
    itemImageUrl:{
        type: String,
        required: true
    },
    itemName:{
        type: String,
        required: true
    },
    itemPrice:{
        type: Number,
        required: true
    },
    itemType: {
        type: String,
        required: true
    }
    // itemQuantity:{
    //     type: Number,
    //     required: true   
    // },
}, {timestamps: true })

const ItemModel = model('items', ItemSchema)

export default ItemModel