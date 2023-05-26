import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config'
import { AppDataSource } from './data-source';
import routes from "./routes";
import jwt from 'jsonwebtoken';

AppDataSource.initialize()
  .then(() => {

    const app = express();

    app.use(express.json());

    app.use('/api', routes);

    app.listen(process.env.SERVER_PORT, () => {
      console.log('API Gateway running!');
    });

  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })



