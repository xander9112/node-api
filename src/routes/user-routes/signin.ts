import {encode} from 'jwt-simple'
import config from '../../config'

export const signin = (db) => (req, res) => {
    const user = {name: req.body.name, password: req.body.password}

    db.collection('users').findOne(user, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send({
                token: encode({username: item.username, _id: item._id}, config.SECRET)
            });
        }
    });
}


// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YzRhZTljMGQ4YTdkODI2NTBkNjQ5M2IifQ.ucoL4rm1c9ek5KZ1M1L6Y4WoMbCUyVW9Td_txsXdFBQ