const mongoose = require('mongoose')
	, UserSchema = require('../schemas/UserSchema.js')
	, AddressSchema = require('../schemas/AddressSchema.js')
	, ContactSchema = require('../schemas/ContactSchema.js')
	, WalletSchema = require('../schemas/WalletSchema.js')
	;

var UserController = {
	create: create
};

function create(callback) {
	var address = new AddressSchema({
		country: 'Brazil'
		, state: 'São Paulo'
		, city: 'Rio Claro'
		, street: 'Rua 7, 273'
		, cep: '13452-000'
	});

	var contract = new ContactSchema({
		type: 'mobile'
		, number: '19978441234'
	});

	var wallet = new WalletSchema();

	var user = new UserSchema();
}

module.exports = UserController;