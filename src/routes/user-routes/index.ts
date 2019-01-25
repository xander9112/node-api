import {find} from './find'
import {findOne} from './findOne'
import {insertOne} from './insertOne'
import {remove} from './remove'
import {updateOne} from './updateOne'
import {signup} from './signup'
import {signin} from './signin'

export default (app, db) => {
    app.get('/users', find(db));
    app.get('/users/:id', findOne(db));
    app.delete('/users/:id', remove(db));
    app.put('/users/:id', updateOne(db));
    app.post('/users', insertOne(db));
    app.post('/signin', signin(db));
    app.post('/signup', signup(db));
};