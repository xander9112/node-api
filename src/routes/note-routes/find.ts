export const find = (db) => (req, res) => {
    db.collection('notes').find().toArray((err, items) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(items);
        }
    });
}
