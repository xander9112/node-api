export const find = (db) => (req, res) => {
    db.collection('users').find({}, {projection: {password: false}}).toArray((err, items) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(items);
        }
    });
}
