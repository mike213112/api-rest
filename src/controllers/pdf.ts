import { Request, Response } from "express";

import db from "../database/database";

class PDFSERVER {
    public async getAll(req: Request, res: Response) {
        const data = await db.query("SELECT 1 as val");
    }

    public async Insert(req: Request, res: Response) {
        const data = await db.query("INSERT INTO Datos VALUE (?)", [req.body]);
    }

}


const pdf_serve = new PDFSERVER();
export default pdf_serve;
