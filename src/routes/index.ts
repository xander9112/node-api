import noteRoutes from './note-routes/index'

export default (app, db) => {
	noteRoutes(app, db);
}