import { Router } from 'express';

import pdf_serve from '../controllers/pdf';

class PDFRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void{
        this.router.get("/", pdf_serve.getAll);
        this.router.post("/", pdf_serve.Insert);
    }

}

const pdfroutes = new PDFRoutes();
export default pdfroutes.router;
