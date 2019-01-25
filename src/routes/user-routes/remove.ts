import {ObjectID} from 'mongodb'

export const remove = (db) => (req, res) => {
    const {id} = req.params;
    const details = {'_id': new ObjectID(id)};

    db.collection('users').remove(details, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(id);
        }
    });
}
