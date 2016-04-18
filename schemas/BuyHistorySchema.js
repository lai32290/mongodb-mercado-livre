const Schema = require('mongoose').Schema;

var BuyHistorySchema = new Schema({
	sale: { type: Schema.Types.ObjectId }
	, price: { type: Number }
	, count: { type: Number }
	, rate: { type: Number }
	, comment: { type: String, default: '' }
	
	, created_at: { type: Date, default: Date.now }
})