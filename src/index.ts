import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config'
import { AppDataSource } from './data-source';
import routes from "./routes";

AppDataSource.initialize()
  .then(() => {

    const app = express();

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



