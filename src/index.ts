import app from './App'
import {MongoClient, ObjectID} from 'mongodb'
import * as passport from 'passport'
import {Strategy} from 'passport-http-bearer'
import {decode} from 'jwt-simple'

const port = process.env.PORT || 8000
import db from './config/db'
import config from './config'


MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)

    const db = client.db('node-api')

    passport.use(new Strategy((token, done) => {
        try {
            const {_id} = decode(token, config.SECRET);

            db.collection('users').findOne({'_id': new ObjectID(_id)}, (err) => {
                if (err) {
                    done(null, false);
                } else {
                    done(null, _id);
                }
            });
        } catch (error) {
            done(null, false);
        }
    }));

    app.mountRoutes(db)

    // require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})

// app.listen(port, (err) => {
//     if (err) {
//         return console.log(err)
//     }
//
//     return console.log(`server is listening on ${port}`)
// })


// server.js
// const app = express();
// const port = 8000;
// const db = require('./config/db')
// app.use(bodyParser.urlencoded({ extended: true }));
//
