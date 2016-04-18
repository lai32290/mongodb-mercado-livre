const WalletSchema = require('../schemas/WalletSchema.js')
	;

var WalletController = {
	create: create
};

function create() {
	var wallet = new WalletSchema();
	
	return wallet;
}

module.exports = WalletController;