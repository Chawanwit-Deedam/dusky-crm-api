import mongoose from '../../../common/database/mongoose.db.js'


const { Schema, model} = mongoose

const CampaignSchema = new Schema({
    campaignModel:{
        type: String,
        required: true
    },
    campaignStartDate:{
        type: Date,
        required: true
    },
    campaignEndDate:{
      type: Date,
      required: true
  }

}, {timestamps: true })

const CampaignModel = model('campaigns', CampaignSchema)

export default CampaignModel