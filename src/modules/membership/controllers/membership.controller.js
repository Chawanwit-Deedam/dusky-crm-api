import MembershipService from '../services/membership.service.js'
const MembershipController = {
    getMembership: async (req, res) =>{
        const membership = await MembershipService.getAll()

        res.status(200).json({
            success: true,
            data: membership
        })
    },
    getMembershipById: async (req, res) => {
        const { id } = req.params
        const membership = await MembershipService.getOne(id)

        res.status(200).json({
            success: true,
            data: membership
        })  
    },

    createMembership: async (req, res) => {
        ///const id = req.body.id
        const { memberShipName, memberShipColor, memberShipQuantity, memberShipPrice } = req.body
        const created = await MembershipService.create({ memberShipName, memberShipColor, memberShipQuantity, memberShipPrice })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateMembership: async (req, res) =>{
        const { id } = req.params
        const { memberShipName, memberShipColor, memberShipQuantity, memberShipPrice } = req.body
        const updated = await MembershipService.updateOne(id, { memberShipName, memberShipColor, memberShipQuantity, memberShipPrice })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteMembershipById: async (req, res) => {
        const { id } = req.params
        const membership = await MembershipService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: membership
        })
    },
}
export default MembershipController