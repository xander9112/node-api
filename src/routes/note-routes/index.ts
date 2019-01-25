import {findOne} from './findOne'
import {insertOne} from './insertOne'
import {remove} from './remove'
import {updateOne} from './updateOne'

export default (app, db) => {
    app.get('/notes/:id', findOne(db));
    app.delete('/notes/:id', remove(db));
    app.put('/notes/:id', updateOne(db));
    app.post('/notes', insertOne(db));
};