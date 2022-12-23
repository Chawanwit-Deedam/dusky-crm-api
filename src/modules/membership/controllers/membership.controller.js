import MembershipService from '../services/membership.service.js'
const MembershipController = {
    getMembership: async (req, res) => {
        try {
            const membership = await MembershipService.getAll()

            res.status(200).json({
                success: true,
                data: membership
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },
    getMembershipById: async (req, res) => {
        try {
            const { id } = req.params
            const membership = await MembershipService.getOne(id)

            res.status(200).json({
                success: true,
                data: membership
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    },

    createMembership: async (req, res) => {
        try {
            const { memberShipName, memberShipQuantity, memberShipPrice } = req.body
            const created = await MembershipService.create({ memberShipName, memberShipQuantity, memberShipPrice })

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
    updateMembership: async (req, res) => {
        try {
            const { id } = req.params
            const { memberShipName, memberShipQuantity, memberShipPrice } = req.body
            const updated = await MembershipService.updateOne(id, { memberShipName, memberShipQuantity, memberShipPrice })

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
    deleteMembershipById: async (req, res) => {
        try {
            const { id } = req.params
            const membership = await MembershipService.deleteOne(id)

            res.status(200).json({
                success: true,
                data: membership
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
export default MembershipController