import { Request, Response } from "express";

export class MainController {

    async create(req: Request, res: Response) {

        return res.json({
            'response': 'API Gateway',
            'method': 'POST',
            'Authorization': req.headers.authorization,
            'req': 'create',
            'body': req.body 
        })
    }

    async read(req: Request, res: Response) {
        const data = req.header;
        return res.json({
            'response': 'API Gateway',
            'method': 'GET',
            'Authorization': req.headers.authorization,
            'req': 'read',
            'params': req.params
        })
    }

    async update(req: Request, res: Response) {

        return res.json({
            'response': 'API Gateway',
            'method': 'PUT',
            'Authorization': req.headers.authorization,
            'req': 'update',
            'body': req.body  
        })
    }

    async delete(req: Request, res: Response) {

        return res.json({
            'response': 'API Gateway',
            'method': 'DELETE',
            'Authorization': req.headers.authorization,
            'req': 'delete',
            'body': req.body  
        })
    }

    async endpoint(req: Request, res: Response){
        const listEndpoints = require('express-list-endpoints')
        let app = require('express')();
        res.json(listEndpoints(app));
    }
}