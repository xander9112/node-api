import app from './App'
import {MongoClient, ObjectID} from 'mongodb'
import * as passport from 'passport'
import {Strategy} from 'passport-http-bearer'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'
import {decode} from 'jwt-simple'
import db from './config/db'
import config from './config'

const port = process.env.PORT || 8000


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
    issuer: 'accounts.insta.com',
    audience: 'insta.com'
}

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)

    const db = client.db('node-api')

    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload)
        // try {
        //     const {_id} = decode(token, config.SECRET);
        //
        //     db.collection('users').findOne({'_id': new ObjectID(_id)}, (err) => {
        //         if (err) {
        //             done(null, false);
        //         } else {
        //             done(null, _id);
        //         }
        //     });
        // } catch (error) {
        //     done(null, false);
        // }
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
