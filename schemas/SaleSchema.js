const mongoose = require('mongoose')
	, Schema = mongoose.Schema
	;

var SaleSchema = new Schema({
	title: { type: String, default: '' }
	, description: { type: String, default: ''}
	, photos: [Schema.Types.ObjectId]
	, count: { type: Number: default: 0 }
	, price: { type: Number}
	, actualPrice: { type: Number}
	
	, categories: [String]
	, comments: [Schema.Types.Mixed]

	, created_at: { type: Date, default: Date.now }
	, created_at: { type: Date, default: Date.now }
	, deleted_at: { type: Date, default: undefined }
});

module.exports = SaleSchema;