import { Request, Response} from "express";
import { roleRepository } from "../repositories/roleRepository";

export class RoleController {
    async create(req: Request, res: Response){
        // criar role
        const { role, permissions } = req.body

        if(!role && !permissions){
            
            return res.status(400).json({message: "Role and Permission is required"});

        }

        try{

            const data = roleRepository.create({role, permissions});
            await roleRepository.save(data);
            return res.status(201).json(data);

        } catch ( error ){

            return res.status(500).json({message: "Internal Server Error"});

        }
    }
}