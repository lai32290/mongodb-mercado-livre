const mongoose = require('mongoose')
	, Schema = mongoose.Schema
	;

var AddressSchema = new Schema({
	country: { type: String }
	, state: { type: String }
	, city: { type: String }
	, street: { type: String }
	, cep: { type: String }
});

module.exports = mongoose.model('Address', AddressSchema);