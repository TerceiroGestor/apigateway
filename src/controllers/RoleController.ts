import { Request, Response} from "express";
import { roleRepository } from "../repositories/roleRepository";
import { LogController } from "./LogController";

export class RoleController {
    async find(req: Request, res: Response) {
        try {

            const data = await roleRepository.find();
            return res.status(201).json({data});

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            //* req.params.id */
            const data = await roleRepository.findOneBy({
                id: req.params.id
            });
            return res.status(201).json({data});

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async create(req: Request, res: Response){
        // criar role
        const { role, permissions } = req.body

        if(!role && !permissions){
            
            return res.status(400).json({message: "Role and Permission is required"});

        }

        try{

            const data = roleRepository.create({role, permissions});
            await roleRepository.save(data);
            new LogController().create(req, res, 'create role');
            return res.status(201).json(data);

        } catch ( error ){

            return res.status(500).json({message: "Internal Server Error"});

        }
    }
}