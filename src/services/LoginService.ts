import { loginRepository } from "../repositories/loginRepository";
import bcrypt from 'bcrypt';

export class LoginService {

  public async create(data: any, details: any) {

    try {

      /* const response = await loginRepository.save(
        loginRepository.create({
          "user_id": data.uuid,
          "email": data.email,
          "token": data.token,
          "accessInfo": data.accessInfo,
        })
      ); */

      return 'response';

    } catch (error) {
      return error;
    }

  }

}
