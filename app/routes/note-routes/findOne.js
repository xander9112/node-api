const ObjectID = require('mongodb').ObjectID;

module.exports = (db) => (req, res) => {
	const id = req.params.id;
	const details = { '_id': new ObjectID(id) };
	
	db.collection('notes').findOne(details, (err, item) => {
		if (err) {
			res.send({ 'error': 'An error has occurred' });
		} else {
			res.send(item);
		}
	});
}