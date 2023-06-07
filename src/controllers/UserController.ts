import { Request, Response, response } from "express";
import { userRepository } from "../repositories/userRepository";
import { LogController } from "./LogController";
//new LogController().create(req, res, 'read user');
export class UserController {
    async find(req: Request, res: Response) {
        try {
            const data = await userRepository.find({
                relations: {
                    role: true
                }
            });
            new LogController().create(req, res, 'read user');
            return res.status(201).json({ data });

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const data = await userRepository.find({
                where: { id: req.params.id },
                relations: {
                    role: true
                }
            });

            /* 
            userRepository.find({
                select: {
                    firstName: true,
                    lastName: true,
                },
                relations: {
                    profile: true,
                    photos: true,
                    videos: true,
                },
                where: {
                    firstName: "Timber",
                    lastName: "Saw",
                    profile: {
                        userName: "tshaw",
                    },
                },
                order: {
                    name: "ASC",
                    id: "DESC",
                },
                skip: 5,
                take: 10,
                cache: true,
            })
            
            */
            new LogController().create(req, res, 'read user');
            return res.status(201).json({ data });
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async create(req: Request, res: Response) {
        // criar User
        const { firstName, lastName, role } = req.body

        if (!firstName && !lastName && !role) {
            return res.status(400).json({ message: "firstName, lastName and Role is required" });
        }

        try {

            const data = userRepository.create({ firstName, lastName, role });
            await userRepository.save(data);
            return res.status(201).json(data);

        } catch (error) {

            return res.status(500).json({ message: "Internal Server Error" });

        }
    }
}

function fetch(arg0: string) {
    throw new Error("Function not implemented.");
}
