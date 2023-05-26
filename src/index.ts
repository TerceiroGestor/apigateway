import express, { Request, Response, NextFunction } from 'express';
import { AppDataSource } from './data-source';
import routes from "./router";
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

const app = express();

app.use('/api', routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log('API Gateway running!');
});
