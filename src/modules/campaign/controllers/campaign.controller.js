import CampaignService from '../services/campaign.service.js'
const CampaignController = {
    getCampaign: async (req, res) =>{
        const campaign = await CampaignService.getAll()

        res.status(200).json({
            success: true,
            data: campaign
        })
    },
    getCampaignById: async (req, res) => {
        const { id } = req.params
        const campaign = await CampaignService.getOne(id)

        res.status(200).json({
            success: true,
            data: campaign
        })
    },

    createCampaign: async (req, res) => {
        ///const id = req.body.id
        const { campaignModel, campaignStartDate, campaignEndDate } = req.body
        const created = await CampaignService.create({ campaignModel, campaignStartDate, campaignEndDate })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateCampaign: async (req, res) =>{
        const { id } = req.params
        const { campaignModel, campaignStartDate, campaignEndDate } = req.body
        const updated = await CampaignService.updateOne(id, { campaignModel, campaignStartDate, campaignEndDate })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCampaignById: async (req, res) => {
        const { id } = req.body
        const campaign = await CampaignService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: campaign
        })
    },
}
export default CampaignController