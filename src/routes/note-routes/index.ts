import * as passport from 'passport'

import {find} from './find'
import {findOne} from './findOne'
import {insertOne} from './insertOne'
import {remove} from './remove'
import {updateOne} from './updateOne'

export default (app, db) => {
    app.get('/notes', passport.authenticate('bearer', {session: false}), find(db));
    app.get('/notes/:id', passport.authenticate('bearer', {session: false}), findOne(db));
    app.delete('/notes/:id', passport.authenticate('bearer', {session: false}), remove(db));
    app.put('/notes/:id', passport.authenticate('bearer', {session: false}), updateOne(db));
    app.post('/notes', passport.authenticate('bearer', {session: false}), insertOne(db));
};
