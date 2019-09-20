import { Request, Response } from 'express'
import pool from '../database/database'
class UserControllers {

    //get all users method
    public async allusers(req: Request, res: Response) {
        const allUsers = await pool.query('SELECT * FROM users ORDER BY id_user DESC');

        res.json( allUsers.rows )
    }

    public async newUser(req: Request, res: Response) {
        const { name, email } = req.body;
        await pool.query('INSERT INTO users(name,email) values ($1,$2)', [name, email]);
        res.json({ text: 'user added sucesfully' })
    }

    public async oneUser(req: Request, res: Response) {
        const { id } = req.params;
        const oneUser = await pool.query('SELECT * FROM users where id_user = $1', [id]);
        res.json( oneUser.rows );
    }

    public async viewEnabledUsers(req: Request, res: Response) {
        const enableUsers = await pool.query('SELECT * FROM users WHERE able = true');
        res.json(enableUsers.rows);
    }
    public async viewDisableUsers(req: Request, res: Response) {
        const viewDisableUsers = await pool.query('SELECT * FROM users WHERE able = false');
        res.json(viewDisableUsers.rows);
    }

    public async enableUser(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('update USERS set able=true where id_user = $1 ', [id]);
        res.redirect('/users/enabled')
    }

    public async disableUser(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('update USERS set able = false where id_user = $1 ', [id]);
        res.redirect('/users/disabled')
    }

    public async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;
        await pool.query('UPDATE users SET name = $1,email=$2 where id_user = $3', [name, email, id]);
        res.json({ text: 'user updated sucessfully' });
    }

    public async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        
        await pool.query('Delete from users WHERE id_user = $1', [ id]);
        res.json({ text: 'user deleted  sucessfully' });
    }




}

export const userControllers = new UserControllers();