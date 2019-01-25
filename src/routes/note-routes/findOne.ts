import {ObjectID} from 'mongodb'

export const findOne = (db) => (req, res) => {
    const {id} = req.params;
    const details = {'_id': new ObjectID(id)};

    db.collection('notes').findOne(details, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(item);
        }
    });
}
