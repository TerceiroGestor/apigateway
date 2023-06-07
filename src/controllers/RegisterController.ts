import { Request, Response } from "express";
import { LogController } from "./LogController";

export class RegisterController {

    async service(req: Request, res: Response) {
        
            //acess service

            // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
            // Exemplo:
            // axios.get('https://servico.com/api/dados')
            //   .then(response => res.json(response.data))
            //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
    }
}