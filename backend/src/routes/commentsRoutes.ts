import { Router } from 'express';
import { commentsController } from '../controllers/commentsController';
class CommentRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    public config() {
        //get routes
        this.router.get('/', commentsController.viewUserComments);
        this.router.get('/someComments', commentsController.lastComments);
        this.router.get('/:id/like', commentsController.likeComment);
        this.router.get('/:id', commentsController.photoComments);


        //post routes
        this.router.post('/', commentsController.newComent);


        //put routes
        this.router.put('/:id', commentsController.ediCommnet);

        //delete routes

        this.router.put('/:id', commentsController.deleteComment);
    }
}

const userRoute = new CommentRoutes();
export default userRoute.router;