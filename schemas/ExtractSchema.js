const mongoose = require('mongoose')
	, Schema = mongoose.Schema
	;

var ExtractSchema = Schema({
	from: { type: Schema.Types.ObjectId }
	, to: { type: Schema.Types.ObjectId }
	, sale: { type: Schema.Types.ObjectId }
	, description: { type: String, default: '' }
	, ps: { type: String, default: '' }
	
	, created_at: { type: Date, default: Date.now }
	, canceled_ at: { type: Date, default: undefined }
});

module.exports = ExtractSchema;