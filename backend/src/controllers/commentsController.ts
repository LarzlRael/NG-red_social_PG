import { Request, Response } from 'express';
import pool from '../database/database'
class CommentsController {

    public async viewUserComments(req: Request, res: Response) {

        const userCommnets = await pool.query('SELECT * FROM comentarios');
        res.json(userCommnets.rows);
    }

    public async newComent(req: Request, res: Response) {
        const { id_user, id_img, content } = req.body;
        await pool.query('INSERT INTO comentarios (id_user,id_img,content) values ($1,$2,$3)', [id_user, id_img, content]);
        res.json({ text: 'coment added successfully' });
    }
    public async deleteComment(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM comentarios WHERE id_coment = $1', [id]);
        res.json({ text: 'you deleted a comment' });
    }

    public async ediCommnet(req: Request, res: Response) {
        const { id } = req.params;
        const { content } = req.body;
        await pool.query('UPDATE comentarios SET content = $1 WHERE id_comment = $2', [content, id]);
        res.json({ text: 'you deleted a comment' });
    }
    public async likeComment(req: Request, res: Response) {
        const { id } = req.params;

        await pool.query('UPDATE comentarios set likes = likes+1 where id_comment=$1', [id]);
        res.redirect('/comments');
    }
}


export const commentsController = new CommentsController();