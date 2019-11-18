import { Request, Response } from 'express';
import fs from 'fs-extra';
import pool from '../database/database';
import path from 'path';


class PhotoController {
    public async createPhoto(req: Request, res: Response) {
        const { title, description, id_user } = req.body;
        const url = req.file.path;
        await pool.query('INSERT INTO photos(title,description,url,id_user)values($1,$2,$3,$4)', [title, description, url, id_user]);
        res.json({ text: 'photo added sucessfully' });
    }


    public async allPhotos(req: Request, res: Response) {
        const allPhotos = await pool.query('SELECT * FROM photos  order by id_img DESC ');
        res.json(allPhotos.rows);
    }

    public async somePhotos(req: Request, res: Response) {
        const allPhotos = await pool.query('SELECT * FROM photos  order by id_img DESC limit 6');
        res.json(allPhotos.rows);
    }
    public async getOnePhoto(req: Request, res: Response) {
        const { id } = req.params;
        const onePhoto = await pool.query('SELECT * FROM photos WHERE id_img = $1', [id]);

        await pool.query('UPDATE photos SET views = views+1 WHERE id_img = $1', [id]);
        res.json(onePhoto.rows);
    }

    public async deletePhoto(req: Request, res: Response) {
        const { id } = req.params;

        const id_url = await pool.query('SELECT url FROM photos where id_img = $1', [id]);
        const photoDeleted = await pool.query('DELETE FROM photos WHERE id_img= $1', [
            id
        ]);
        //console.log('url recibida: ', id_url);

        const response = await id_url.rows[0];
        const { url } = response;
        console.log('url recibida: ', url);
        if (photoDeleted) {
            await fs.unlink(path.resolve(url));
        }
        return res.json({ text: 'photo delete successfully' });
    }

    public async updatePhoto(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;
        await pool.query('UPDATE photos SET title = $1, description = $2 where id_img = $3', [title, description, id]);
        res.json({ text: 'photo update sucessfully' });
    }
    //metodo para dar likes :D

    public async likePhoto(req: Request, res: Response) {
        const { id } = req.params;
        console.log('id rescibido : ', id)
        await pool.query('UPDATE photos SET likes = likes+1 WHERE id_img = $1', [id]);

        res.json({ text: 'you liket this photo' })
    }

    //metodo para saber quienes tiene mas likes

    public async photoWithMostLikes(req: Request, res: Response) {
        const photoslikes = await pool.query('SELECT id_img,title,likes,url FROM photos ORDER BY likes DESC LIMIT 3');
        return res.json(photoslikes.rows);

    }

}

export const photoControler = new PhotoController();