import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';

export class UserService {

  public async create(data: any) {

    try {

      const response = await userRepository.save(
        userRepository.create({
          "auth_id": data.uid,
          "name": data.name,
          "email": data.email,
          "password": await bcrypt.hash(data.password, await bcrypt.genSalt(10))
        })
      );

      return data

    } catch (error) {
      return error;
    }

  }

  public async createAuth(data: any) {

    try {

      const response = await userRepository.save(
        userRepository.create({
          "auth_id": data.sub,
          "name": data.name,
          "lastname": data.family_name,
          "email": data.email,
          "email_verified": data.email_verified
        })
      );

      return response;

    } catch (error) {
      return error;
    }

  }
}
