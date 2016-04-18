const mongoose = require('mongoose')
	, Schema = mongoose.Schema
	;

var ContactSchema = Schema({
	type: { type: String }
	, number: { type: String }
});

module.exports = ContactSchema;