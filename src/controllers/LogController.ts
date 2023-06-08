import { Request, Response, response } from "express";
import { logRepository } from "../repositories/logRepository";
import { XMLHttpRequest } from 'xmlhttprequest-ts';

export class LogController {

    async read(req: Request, res: Response) {
        try {

            const data = await logRepository.find();
            return res.status(201).json({data});

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async nfindOe(req: Request, res: Response) {
        try {
            
            const data = await logRepository.findOneBy({
                id: req.body.id //* req.params.id */
            });
            return res.status(201).json({data});
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async create(req: Request, res: Response, request: string) {

        const header = req.headers; // header["x-forwarded-for"]
        const route = `http://ip-api.com/json/${header["x-forwarded-for"]}`; //http://ip-api.com/json/{query}
        var xhr = new XMLHttpRequest();
        xhr.open('GET', route, true);
        xhr.send();
        xhr.onload = async function () {
            const data = logRepository.create({
                "clientinfo": xhr.responseText,
                "request": request
            });
            await logRepository.save(data);
            return data;
        };
    }
}

function fetch(arg0: string) {
    throw new Error("Function not implemented.");
}
