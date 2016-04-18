const express = require('express')
	, mongoose = require('mongoose')
	, bodyParser = require('body-parser')

	, User = require('./schemas/UserSchema.js')
	, Wallet = require('./schemas/WalletSchema.js')
	, Address = require('./schemas/AddressSchema.js')

	, app = express()
	, port = 3001
	;

const requestNames = {
	email: 'email'
	, password: 'password'
	, cpf: 'cpf'
	, country: 'country'
	, state: 'state'
	, city: 'city'
	, street: 'street'
	, cep: 'cep'
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
	res.send('bla');
});

app.route('/user')
	.put(userCreate)
	;

app.listen(port, function() {
	console.log('Server is on with port ' + port);

	mongoose.connect('mongodb://localhost/mercado')
});

function userCreate(req, res) {
	var request = req.body;

	var address = new Address({
		country: request[requestNames.country]
		, state: request[requestNames.state]
		, city: request[requestNames.city]
		, street: request[requestNames.street]
		, cep: request[requestNames.cep]
	});

	var wallet = new Wallet();

	var user = new User({
		email: request[requestNames.email]
		, password: request[requestNames.password]
		, cpf: request[requestNames.cpf]
		, wallet: wallet._id
		, addresses: [address]
		, defaultAddresses: address._id
	});

	wallet.save()
		.then(function(result, erro) {
			return address.save();
		})
		.then(function(result, erro) {
			return user.save();
		})
		.then(function(result, erro) {
			User.find(result._id)
				.populate('defaultAddresses')
				.populate('addresses')
				.populate('wallet')
				.exec(function(err, u) {
					res.send(u);
				})
		});
}