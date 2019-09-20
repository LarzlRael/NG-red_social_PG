import express, { json, Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import path from 'path';


//importando la base de datos
import '../src/database/database';  
//importando el enrutador
import userRoutes from '../src/routes/userRoutes'
import photoRoutes from '../src/routes/photosRoutes'
import commentsRoutes from './routes/commentsRoutes'
class Server {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.middelwares();
        this.routes();
        this.staticFiles();
        
    }
    //config
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    //middewares
    middelwares() {
        this.app.use(morgan('dev'));
        this.app.use(json());
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: false }));
    }

    //routes
    routes(){
        this.app.use('/users',userRoutes);
        this.app.use('/photos',photoRoutes);
        this.app.use('/comments',commentsRoutes);
    }
    
    //static files
    
    staticFiles(){
        this.app.use('/uploads',express.static(path.resolve('uploads')));
    }
    //start the server
    start() {
        this.app.listen(this.app.get('port'),()=> {
            console.log('server on port :' + this.app.get('port'));
        });
    }

}
const serve = new Server();
serve.start();