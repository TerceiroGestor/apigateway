import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { CustomError } from "../secure/CustomError";
import { Cryptography } from "../secure/Cryptography";


export class UserService {

  private readonly store: any;

  constructor() {
    this.store = AppDataSource.getRepository(User);
  }

  public async create(data?: any): Promise<any> {

    if (await this.checkIfUserExists(data)) {
      throw new CustomError(400, { message: 'Existing email!'});
    }

    try {

      const encryption = await new Cryptography().encryption(data);
      const result = await this.store.save(this.store.create(encryption));
      return !!result

    } catch (error) {
      throw new CustomError(400, { message: 'Database error!'});
    }

  }

  public async read(data: any) {

    const user = await this.store.findOneBy(data);
    return user ? user : false;

  }

  public async update(data: any) {
    const encryption = await new Cryptography().encryption(data);
    const user = await this.lookForUser(data);
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
  public async checkIfUserExists(data: any): Promise<boolean> {

    const user = await this.store.findOneBy({ email: data.email });
    return !!user;

  }

  public async lookForUser(data: any): Promise<any> {
    const user = await this.store.findOneBy({ email: data.email });
    return user;
  }

  public async checkToken(email: string, token: any) {
    const user = await this.store.createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .andWhere('user.token = :token', { token: token })
      .getOne();

    return user ? user : false;
  }


}
