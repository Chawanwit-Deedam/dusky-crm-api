import DashboardService from "../service/dashboard.service.js";

const DashboardController = {
    getDashboard: async (req, res) => {
        const count = req.body
        const Dashboard = await DashboardService.getAll( count )
        
        res.status(200).json({
            success: true,
            data: Dashboard
        })
    }
}
export default DashboardController