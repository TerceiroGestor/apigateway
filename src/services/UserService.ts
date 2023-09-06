import { userRepository } from "../repositories/userRepository";
import { Cryptography } from "../secure/Cryptography";
import { User } from "../entities/User";
import { Repository } from 'typeorm';


export class UserService {

  public async create(data?: any) {

    const encryption = await new Cryptography().encryption(data);

    try {

      if (encryption) {
        const response = await userRepository.save(
          userRepository.create({
            "name": encryption.name,
            "email": encryption.email,
            "password": encryption.password
          })
        );
        return response ? { store: true, message: 'Dados armazenados com sucesso!' } : { store: false, message: 'Erro ao armazenar dados!' };
      }

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

    const user = await userRepository.findOneBy({ email: data.email });

    if (user) {

      /* new LogService().create(user, { message: `O usuário com o email ${data.email} já existe.` }); */
      return user;

    } else {

      return false;

    }

  }

  public async update(data: any) {
    const encryption = await new Cryptography().encryption(data);

    try {

      const user = await userRepository.findOneBy({ email: data.email });
      if (!user) return false;
      Object.assign(user, encryption);
      await userRepository.save(user);
      return user;

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

  /**
 * @param email 
 * @returns
 */
  public async checkIfUserExists(email: string): Promise<{ user?: User | null; error?: any }> {

    try {

      const user = await userRepository.findOneBy({ email: email });
      return { user } || null;

    } catch (error) {

      return { error } || null;

    }

  }

  public async checkToken(email: string, token: any) {
    const user = await userRepository.createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .andWhere('user.token = :token', { token: token })
      .getOne();
    if (!user) return false;
    return user;
  }

}
