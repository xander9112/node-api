import userRoutes from './user-routes'
import noteRoutes from './note-routes'

export default (app, db) => {
    userRoutes(app, db);
    noteRoutes(app, db);
}