import { Router } from 'express';
import { userControllers } from '../controllers/userController';
class UserRoute {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    public config() {
        //get routes
        this.router.get('/', userControllers.allusers)
        this.router.get('/users', userControllers.allusers)
        this.router.get('/user/:id', userControllers.oneUser);
        this.router.get('/enabled', userControllers.viewEnabledUsers)
        this.router.get('/disabled', userControllers.viewDisableUsers)
        this.router.get('/enable/:id', userControllers.enableUser)
        this.router.get('/disable/:id', userControllers.disableUser)
        //post routes
        this.router.post('/', userControllers.newUser);
        //put routes
        this.router.put('/:id', userControllers.updateUser);

        //delete routes
        this.router.delete('/:id', userControllers.deleteUser)

    }

}

const userRoutes = new UserRoute();

export default userRoutes.router;
