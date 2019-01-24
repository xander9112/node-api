// routes/note_routes.js

const findOne = require('./findOne')
const remove = require('./remove')
const updateOne = require('./updateOne')
const insertOne = require('./insertOne')

module.exports = function (app, db) {
	app.get('/notes/:id', findOne(db));
	app.delete('/notes/:id', remove(db));
	app.put('/notes/:id', updateOne(db));
	app.post('/notes', insertOne(db));
};