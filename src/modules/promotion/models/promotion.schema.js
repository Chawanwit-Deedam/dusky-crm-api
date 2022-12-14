import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model} = mongoose

const PromotionSchema = new Schema({
    promotionModel:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
      type: Date,
      required: true
  }

}, {timestamps: true })

const PromotionModel = model('promotions', PromotionSchema)

export default PromotionModel