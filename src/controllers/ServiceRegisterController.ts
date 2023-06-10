/* import { Request, Response } from "express";
import fetch from 'node-fetch';
import { LogController } from "./LogController";

export class RegisterController {

    async create(req: Request, res: Response) {

        try {
            const response = await fetch(process.env.SERVICE_REGISTER || '', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(req.body)
            });

            const data = await response.json();
            new LogController().create(req, res, data);
            res.json(data);
            
        } catch (error) {
            res.json(error);
        }
    }

    async read(req: Request, res: Response) {

        try {
            const response = await fetch(process.env.SERVICE_REGISTER || '', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
      
            const data = await response.json();
            new LogController().create(req, res, data);
            res.json(data);
            
        } catch (error) {
            res.json(error);
        }
    }

    async update(req: Request, res: Response) {

        try {
            const response = await fetch(process.env.SERVICE_REGISTER || '', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(req.body)
            });
      
            const data = await response.json();
            new LogController().create(req, res, data);
            res.json(data);
            
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req: Request, res: Response) {

        try {
            const response = await fetch(process.env.SERVICE_REGISTER || '', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(req.body)
            });
      
            const data = await response.json();
            new LogController().create(req, res, data);
            res.json(data);
            
        } catch (error) {
            //new LogController().create(req, res, error.json());
            res.json(error);
        }
    }
} */