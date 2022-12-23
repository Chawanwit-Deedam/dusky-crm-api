import CampaignService from '../services/campaign.service.js'
const CampaignController = {
    getCampaign: async (req, res) => {
        try {
            const campaign = await CampaignService.getAll()

            res.status(200).json({
                success: true,
                data: campaign
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    getCampaignById: async (req, res) => {
        try {
            const { id } = req.params
            const campaign = await CampaignService.getOne(id)

            res.status(200).json({
                success: true,
                data: campaign
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },

    createCampaign: async (req, res) => {
        try {
            const { campaignModel, campaignStartDate, campaignEndDate } = req.body
            const created = await CampaignService.create({ campaignModel, campaignStartDate, campaignEndDate })

            res.status(201).json({
                success: true,
                data: created
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
        ///const id = req.body.id
    },
    updateCampaign: async (req, res) => {
        try {
            const { id } = req.params
            const { campaignModel, campaignStartDate, campaignEndDate } = req.body
            const updated = await CampaignService.updateOne(id, { campaignModel, campaignStartDate, campaignEndDate })

            res.status(200).json({
                success: true,
                data: updated
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    deleteCampaignById: async (req, res) => {
        try {
            const { id } = req.body
            const campaign = await CampaignService.deleteOne(id)

            res.status(200).json({
                success: true,
                data: campaign
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
}
export default CampaignController