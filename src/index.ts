import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config'
import { AppDataSource } from './data-source';
import routes from "./routes";

AppDataSource.initialize()
  .then(() => {

    const app = express();

    app.use(cors({
      //origin: 'http://seu-front-end.com', // Domínio do seu front-end
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    }));

    app.use(express.json());

    app.use('/api', routes);

    //Correção do Railway
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    const hostname = process.env.HOSTNAME || '0.0.0.0';

    app.listen(port, hostname, () => {
      console.log('API Gateway running!');
    });

  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })



