import * as express from 'express'
import * as  bodyParser from 'body-parser';

import routes from './routes'

class App {
    public express

    constructor() {
        this.express = express()
        this.setBodyParser()
    }

    public mountRoutes(db): void {
        routes(this.express, db)


        // const router = express.Router()
        //
        // router.get('/', (req, res) => {
        //     res.json({
        //         message: 'Hello World!'
        //     })
        // })
        // this.express.use('/', router)
    }

    private setBodyParser(): void {
        this.express.use(bodyParser.urlencoded({extended: true}));
    }

    public listen(port, cb): void {
        this.express.listen(port, cb)
    }
}

export default new App()