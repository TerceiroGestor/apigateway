import { Request, Response } from "express";
import { LogController } from "./LogController";

export class RegisterController {

    async read(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
        return res.json('Route Register Method GET')
    }

    async create(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));

        return res.json('Route Register Method POST')
    }

    async update(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));

        return res.json('Route Register Method PUT')
    }

    async delete(req: Request, res: Response) {

        //acess service

        // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
        // Exemplo:
        // axios.get('https://servico.com/api/dados')
        //   .then(response => res.json(response.data))
        //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));

        return res.json('Route Register Method DELETE')
    }
}