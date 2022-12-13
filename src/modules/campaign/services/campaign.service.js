import CampaignModel from '../models/campaign.schema.js'

const CampaignService = {
    create: (payload) => {
        return new CampaignModel(payload).save()
    },
    getAll:(query = {}) => {
        return CampaignModel.find(query)
    },
    getOne:(id) => {
        return CampaignModel.findOne({ _id: id })
    },
    updateOne: (id, payload) => {
        return CampaignModel.findOneAndUpdate({ _id: id }, { $set: payload})
    },
    deleteOne:(id) => {
        return CampaignModel.deleteOne({_id: id})
    } 
}

export default CampaignService