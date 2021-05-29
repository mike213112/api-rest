import { Request, Response } from "express";

import db from "../database/database";

class PDFSERVER {
    public async getAll(req: Request, res: Response) {
        const data = await db.query("SELECT * FROM datos");
        res.status(200).send(data);
    }

    public async Insert(req: Request, res: Response) {
        /*const data = await db.query("INSERT INTO Datos set ?", [req.body]);
        try {
            res.status(200).send(data);
        } catch {   
            res.status(400).send(data);
        }*/
        const query = 'INSERT INTO datos (name,created_at) VALUE (?,?)';
        const id = req.body.id;
        const name = req.body.name;
        console.log("hola  === ", req.body);
        console.log("id: " + id + " name: " + name);
        const respuesta = await db.query(query, [req.body.name,req.body.created_at]);
        
        try {
            res.status(200).json(req.body);    
        } catch {
            res.status(200).json(req.params);   
        }
    }

}


const pdf_serve = new PDFSERVER();
export default pdf_serve;
