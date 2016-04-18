const mongoose = require('mongoose')
	, Schema = mongoose.Schema
	;

var WalletSchema = new Schema({
	extracts: [Schema.Types.ObjectId]
	, created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wallet', WalletSchema);