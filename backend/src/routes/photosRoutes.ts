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
        this.router.get('/:id', photoControler.getOnePhoto);
        this.router.post('/', multer.single('image'), photoControler.createPhoto)
        //like module
        this.router.get('/:id/like', photoControler.likePhoto);
        
        //get routes
        this.router.delete('/:id', photoControler.deletePhoto);

        //put routes
        this.router.put('/:id', photoControler.updatePhoto);
    }
}

const userRoute = new UserRoute();
export default userRoute.router;