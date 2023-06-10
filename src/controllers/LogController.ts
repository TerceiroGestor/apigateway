import { Request, Response } from "express";
import { logRepository } from "../repositories/logRepository";
import { XMLHttpRequest } from 'xmlhttprequest-ts';
import { UUID } from "typeorm/driver/mongodb/bson.typings";

export class LogController {

    async read(req: Request, res: Response) {
        try {

            const data = await logRepository.find({
                order: {
                  created: 'DESC'
                }
              });
            res.status(201).json({ data });

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async findOne(req: Request, res: Response) {
        try {

            const data = await logRepository.findOneBy({
                id: req.body.id //* req.params.id */
            });
            return res.status(201).json({ data });
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async create(req: Request, res: Response, user: any, request: any) {

        const header = req.headers; // header["x-forwarded-for"]
        const route = `http://ip-api.com/json/${header["x-forwarded-for"]}`; //http://ip-api.com/json/{query}
        var xhr = new XMLHttpRequest();
        xhr.open('GET', route, true);
        xhr.send();
        xhr.onload = async function () {
            const data = logRepository.create({
                "user_id": user.id,
                "customerInfo": xhr.responseText,
                "requestInfo": request
            });
            await logRepository.save(data);
            return data;
        };
    }
}