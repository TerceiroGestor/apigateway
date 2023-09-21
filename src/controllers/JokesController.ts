import { NextFunction, Request, Response } from "express";
import { JokesService } from "../services/JokesService";
import { CustomError } from "../security/CustomError";

export class JokesController {

    public async create(req: Request, res: Response, next: NextFunction) {

        try {

            const response = await new JokesService().create(req.body);
            res.status(200).json(response);

        } catch (error) {
            next(error);
        }
    }

    public async read(req: Request, res: Response, next: NextFunction) {

        try {

            const response = await new JokesService().read(req.query);
            res.status(200).json(response);

        } catch (error) {
            next(error);
        }
    }

}