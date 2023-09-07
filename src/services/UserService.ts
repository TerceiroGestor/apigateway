import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

import { Cryptography } from "../secure/Cryptography";


export class UserService {

  private readonly store: any;

  constructor() {
    this.store = AppDataSource.getRepository(User);
  }

  public async create(data?: any) {

    const encryption = await new Cryptography().encryption(data);
    const user = await this.checkIfUserExists(data);
    if(user) return user;

    try {

      if (encryption && user) {

        Object.assign(user, encryption);
        const result = await this.store.save(this.store.create(user))
        return result ? { store: true, message: 'Dados armazenados com sucesso!' } : { store: false, message: 'Erro ao armazenar dados!' };

      }

    } catch (error) {
      return error;
    }

  }

  public async read(data: any) {

    const user = await this.store.findOneBy(data);
    return user ? user : false;

  }

  public async update(data: any) {
    const encryption = await new Cryptography().encryption(data);
    const user = await this.checkIfUserExists(data);
    try {

      Object.assign(user, encryption);
      await this.store.save(user);
      return user;

    } catch (error) {
      return error;
    }

  }

  public async delete(uuid: any) {

    try {

      const response = await this.store.delete({ auth_id: uuid });
      return response;

    } catch (error) {
      return error;
    }

  }

  /**
 * @param data
 * @returns
 */
  public async checkIfUserExists(data: any): Promise<{ user?: User | null; error?: any }> {

    const user = await this.store.findOneBy({email: data.email});
    return user ? user : false;

  }

  public async checkToken(email: string, token: any) {
    const user = await this.store.createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .andWhere('user.token = :token', { token: token })
      .getOne();

    return user ? user : false;
  }


}
