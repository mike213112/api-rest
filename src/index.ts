import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import showBanner from 'node-banner';

import PDFRoutes from './routes/pdf';

class Server {
    public app: Application;
  
    constructor() {
      this.app = express();
      this.config();
      this.routes();
    }
  
    config(): void {
      this.app.set("port", process.env.PORT || 3000);
      this.app.use(morgan("dev"));
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
    }
  
    routes(): void {
        this.app.use("/api/pdf", PDFRoutes);
    }
  
    start() {
      this.app.listen(this.app.get('port'), () =>{
        showBanner('API   REST   FROM   NODEJS', `Server on port ${this.app.get('port')}`);
        //console.log("Sever on port", this.app.get("port"));
      });
    }
  
  }
  
  const serve = new Server();
  serve.start();
  