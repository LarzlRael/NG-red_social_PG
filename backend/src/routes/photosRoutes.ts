import { Router } from 'express';
import multer from '../libs/multerconfig'
import { photoControler } from '../controllers/photoController';
class UserRoute {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    public config() {
        //get routes
        this.router.get('/', photoControler.allPhotos);
        this.router.get('/somePhotos', photoControler.somePhotos);
        this.router.get('/mostLikes',photoControler.photoWithMostLikes)
        this.router.get('/:id', photoControler.getOnePhoto);
        
        //post routes
        this.router.post('/', multer.single('image'), photoControler.createPhoto);
        //like module
        this.router.get('/:id/like',photoControler.likePhoto);

        
        //put routes
        this.router.put('/:id', photoControler.updatePhoto);
        //delte routes
        this.router.delete('/:id', photoControler.deletePhoto);
    }
}

const userRoute = new UserRoute();
export default userRoute.router;