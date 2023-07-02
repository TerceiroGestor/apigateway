import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';

export class UserService {

  public async create(data: any) {

    try {

        const response = await userRepository.save(
            userRepository.create({
                "firebase_uid": data.uid,
                "name": data.name,
                "email": data.email,
                "password": await bcrypt.hash(data.password, await bcrypt.genSalt(10))
            })
        );
        
        return data

    } catch (error) {
        return  error;
    }
    
  }
}
