import express, { Request, Response, NextFunction } from 'express';
import routes from "./router";
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

const app = express();
app.use('/api', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`API Gateway rodando em http://localhost:${port}`);
});