import mongoose from '../../../common/database/mongoose.db.js'


const { Schema, model} = mongoose

const ProductSchema = new Schema({
    productType:{
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    productPrice:{
      type: String,
      required: true
  }



}, {timestamps: true })

const ProductModel = model('products', ProductSchema)

export default ProductModel