import app from './App'
import {MongoClient} from 'mongodb'

const port = process.env.PORT || 8000
import db from './config/db'


MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)

    const db = client.db('node-api')

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
