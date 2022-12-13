import PromotionService from '../services/promotion.service.js'
const PromotionController = {
    getPromotion: async (req, res) =>{
        const promotion = await PromotionService.getAll()

        res.status(200).json({
            success: true,
            data: promotion
        })
    },
    getPromotionById: async (req, res) => {
        const { id } = req.params
        const promotion = await PromotionService.getOne(id)

        res.status(200).json({
            success: true,
            data: promotion
        })
    },

    createPromotion: async (req, res) => {
        ///const id = req.body.id
        const { promotionModel, startDate, endDate } = req.body
        const created = await PromotionService.create({ promotionModel, startDate, endDate })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updatePromotion: async (req, res) =>{
        const { id } = req.params
        const { promotionModel, startDate, endDate } = req.body
        const updated = await PromotionService.updateOne(id, { promotionModel, startDate, endDate })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deletePromotionById: async (req, res) => {
        const { id } = req.body
        const promotion = await PromotionService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: promotion
        })
    },
}
export default PromotionController