import { Request, Response } from "express";
import { logRepository } from "../repositories/logRepository";
import { XMLHttpRequest } from 'xmlhttprequest-ts';
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { request } from "http";

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

    public async create(user: any, details: any, req: Request, res: Response) {

        /* const header = req.headers; // header["x-forwarded-for"]
        const route = `http://ip-api.com/json/${header["x-forwarded-for"]}`; //http://ip-api.com/json/{query}
        var xhr = new XMLHttpRequest();
        xhr.open('GET', route, true);
        xhr.send();
        xhr.onload = async function () {
            const data = logRepository.create({
                "user_id": user.id,
                "customerInfo": xhr.responseText,
                "requestInfo": details
            });
            await logRepository.save(data);
            return data;
        }; */

    }

    public async createLog(user: any, details: any) {


        /* const data = logRepository.create({
            "user_id": user.id,
            "requestInfo": details
        });
        await logRepository.save(data);
        return data; */
    }

}