import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model } = mongoose

const CustomerSchema = new Schema({
	idCustomer: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	}
}, {
	timestamps: false,
	_id: false,
	strict: true
})

const OrderHistorySchema = new Schema({

	customer: {
		type: CustomerSchema,
		required: true
	},
	item: {
		type: Array,
		required: true
	},
	orderQuantityTotal: {
		type: Number,
		required: true
	},
	orderPriceTotal: {
		type: Number,
		required: true
	},
	orderRepeatType: {
		type: Array,
		required: true
	},
	dateOfbuy: {
		type: Date,
		required: true
	},
	deliveryStatus: {
		type: String,
		required: true
	},
	idPromotion: {
		type: String,
		required: true
	},
	payment: {
		type: String,
		required: true
	}

}, { timestamps: true })

const OrderHistoryModel = model('orderHistory', OrderHistorySchema)

export default OrderHistoryModel