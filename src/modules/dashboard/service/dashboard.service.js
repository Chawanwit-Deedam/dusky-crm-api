import CustomerModel from "../../customer/models/customer.schema.js"
import EmployeeModel from "../../employee/models/employee.schema.js"
import OrderHistoryModel from "../../orderHistory/models/orderHistory.schema.js"


const DashboardService = {
    getAll: async (selet) => {
        let customer = await CustomerModel.find()
        let employee = await EmployeeModel.find()
        let order = await OrderHistoryModel.find()

        let orderQuantityTotal = 0
        let orderPriceTotal = 0
        let items = Array()
        for (let i = 0; i < order.length; i++) {
            orderQuantityTotal += order[i].orderQuantityTotal
            orderPriceTotal += order[i].orderPriceTotal
            for (let j = 0; j < order[i].item.length; j++) {
                items.push(
                    order[i].item[j]
                )
            }
        }
        //return items
        let itemsAll = []
        for (let i = 0; i < items.length; i++) {
            if (items[i].nameItem) {
                const findsort = itemsAll.findIndex((item) => item.nameItem === items[i].nameItem)

                if (findsort >= 0) {
                    itemsAll[findsort].qty += items[i].quantityItem
                    itemsAll[findsort].totalItem += items[i].priceItem * items[i].quantityItem
                }

                else {
                    itemsAll.push({
                        nameItem: items[i].nameItem,
                        qty: items[i].quantityItem,
                        totalItem: items[i].priceItem * items[i].quantityItem
                    })
                }
            }
        }
        itemsAll.sort(function (a, b) {
            return b.qty - a.qty
        });

        let totalCustomer = customer.length
        let totalEmployee = employee.length


        return { totalCustomer, totalEmployee, orderQuantityTotal, orderPriceTotal, itemsAll }
    }
}

export default DashboardService