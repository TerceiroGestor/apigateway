import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';
import { LogService } from "./LogService";

export class UserService {

  public async createEmail(user?: any, email?: any, password?: any) {

    try {

      const response = await userRepository.save(
        userRepository.create({
          "auth_id": user.uid,
          "name": user.name,
          "email": user.email,
          "password": await bcrypt.hash(user.password, await bcrypt.genSalt(10))
        })
      );

      return response;

    } catch (error) {
      return error;
    }

  }

  public async createAuth(data: any) {

    // Verifique se o usuário já existe
    const existingUser = await this.checkIfUserExists(data);

    if (existingUser) {

      return existingUser;

    } else {

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

    }
  }

  public async read(data: any) {

    try {

      const response = await userRepository.findOne(data.id);
      return response;

    } catch (error) {
      return error;
    }

  }

  public async update(data: any) {

    try {

      const response = await userRepository.findOne(data.id);
      return response;

    } catch (error) {
      return error;
    }

  }

  public async delete(uuid: any) {

    try {

      const response = await userRepository.delete({ auth_id: uuid });
      return response;

    } catch (error) {
      return error;
    }

  }

  public async checkIfUserExists(data: any) {

    const user = await userRepository.findOneBy({ email: data.email });

    if (user) {

      /* new LogService().create(user, { message: `O usuário com o email ${data.email} já existe.` }); */
      return user;

    } else {

      return false;

    }

  }

}
