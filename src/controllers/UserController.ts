import { Request, Response } from "express";
import { LogController } from "./LogController";
import { userRepository } from "../repositories/userRepository";
import { RegisterController } from "./RegisterController";

import bcrypt from 'bcrypt';

export class UserController {

    /**
     * @param req 
     * @param res
     * @param user: any
     * @param credential: any
     * @requires req.body
     * @returns res.json
     * @link //https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
     */
    async create(req: Request, res: Response, credential?: any) {

        try {

            const data = await userRepository.save(
                userRepository.create({
                    "firebase_uid": credential.uid,
                    "name": req.body.name,
                    "email": req.body.email,
                    "password": await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
                })
            );
            
            new LogController().create(req, res, data, {message: 'register'});
            res.status(200).json(data);

        } catch (error) {
            res.status(500).json(error);
        }

    }

    async read(req: Request, res: Response) {
        const data = await userRepository.find();
        new LogController().create(req, res, data, {message: 'read user'});
        res.status(200).json(data);
    }

    // Finalizar
    async update(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

        const register = await new RegisterController().delete(req, res)

        try {

            const data = await userRepository.findOneBy({ id: req.body.id });

            if (!data) {
                return res.status(404).json({ message: 'User not found' });
            }

            const deleted = await userRepository.softRemove(data);

            new LogController().create(req, res, data, {message: 'deleted user'});
            return res.status(201).json(deleted);

        } catch (error) {
            return res.status(500).json({ message: "Error delete user" });
        }

    }
}