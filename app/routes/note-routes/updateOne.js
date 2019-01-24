const ObjectID = require('mongodb').ObjectID;

module.exports = (db) => (req, res) => {
	const id = req.params.id;
	const details = { '_id': new ObjectID(id) };
	const note = { text: req.body.body, title: req.body.title };
	
	db.collection('notes').updateOne(details, { $set: note }, (err, result) => {
		if (err) {
			res.send({ 'error': err });
		} else {
			res.send(note);
		}
	});
}