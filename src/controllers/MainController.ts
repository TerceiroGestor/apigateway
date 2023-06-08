import { Request, Response } from "express";
import { LogController } from "./LogController";

export class MainController {

    async create(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));

        return res.json({
            'response': 'API Gateway',
            'method': 'POST',
            'req': 'create' 
        })
    }
    async read(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
        return res.json({
            'response': 'API Gateway',
            'method': 'GET',
            'req': 'read' 
        })
    }

    async update(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));

        return res.json({
            'response': 'API Gateway',
            'method': 'PUT',
            'req': 'update' 
        })
    }

    async delete(req: Request, res: Response) {

        //acess service
        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));

        return res.json({
            'response': 'API Gateway',
            'method': 'DELETE',
            'req': 'delete' 
        })
    }
}