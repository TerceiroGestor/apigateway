import { authRepository } from "../repositories/authRepository";
import bcrypt from 'bcrypt';

export class AuthService {

  public async create(user: any, data: any, tokens: any) {

    try {

      const response = await authRepository.save(
        authRepository.create({
          "user_id": user.id,
          "email": user.email,
          "emailVerified": user.email_verified,
          "token": tokens.access_token,
        })
      );

      return response;

    } catch (error) {
      return error;
    }

  }

  public async delete (token: any){
    try {

      /// verificar o token e desativar
      const user = await authRepository.findOneBy({ token: token });
      const response = await authRepository.softRemove(token);
      return response;

    } catch (error) {
      return error;
    }

  }

}
