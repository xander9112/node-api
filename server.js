// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const db = require('./config/db')
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {
	console.log(err)
	if (err) return console.log(err)
	
	const db = client.db('node-api')
	
	require('./app/routes')(app, db);
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});
})