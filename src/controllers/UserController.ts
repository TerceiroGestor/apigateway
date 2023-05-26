import { Request, Response} from "express";
import { userRepository } from "../repositories/userRepository";

export class UserController {
    async read(req: Request, res: Response){
        try{

            const data = await userRepository.find({
                relations: {
                    role: true
                }
            });
            return res.status(201).json(data);

        } catch ( error ){
            return res.status(500).json({message: "Internal Server Error"});
        }
    }

    async create(req: Request, res: Response){
        // criar User
        const { firstName, lastName, role } = req.body

        if(!firstName && !lastName && !role){
            return res.status(400).json({message: "firstName, lastName and Role is required"});
        }

        try{

            const data = userRepository.create({firstName, lastName, role});
            await userRepository.save(data);
            return res.status(201).json(data);

        } catch ( error ){

            return res.status(500).json({message: "Internal Server Error"});

        }
    }
}