const mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: { type: String }
	, password: { type: String }
	, cpf: { type: String }
	, defaultAddresses: { type: Schema.Types.ObjectId, ref: 'Address' }
	, addresses: [{ type: Schema.Types.ObjectId, ref: 'Address'}]
	, contacts: [Schema.Types.ObjectId]

	, level: { type: Number, default: 1 }
	, wallet: { type: Schema.Types.ObjectId , ref: 'Wallet' }

	, buyHistory: [Schema.Types.ObjectId]
	, desires: [Schema.Types.ObjectId]
	, sales: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', UserSchema);