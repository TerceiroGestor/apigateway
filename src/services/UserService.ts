import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { CustomError } from "../security/CustomError";
import { Cryptography } from "../security/Cryptography";

export class UserService {

  private readonly store: any;

  constructor() {
    this.store = AppDataSource.getRepository(User);
  }

  public async create(data?: any): Promise<any> {
    
    try {

      if (await this.checkIfUserExists(data)) {
        throw new CustomError(400, { message: 'Existing email!' });
      }

      const encryption = await new Cryptography().encryption(data);
      const result = await this.store.save(this.store.create(encryption));
      return !!result

    } catch (error) {
      throw error;
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
      const result = await this.store.save(user);
      return result;

    } catch (error) {
      throw new CustomError(400, { message: 'Database Error!' })
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

    try {

      const user = await this.store.findOneBy({ email: data.email });
      return !!user;

    } catch (error) {
      throw new CustomError(400, { message: 'Database error!' });
    }

  }

  public async lookForUser(data: any): Promise<any> {

    try {
      const user = await this.store.findOneBy({ email: data.email });
      if (!user) { throw new CustomError(400, { message: 'User not found!' }); }
      return user;
    } catch (error) {
      throw error;
    }

  }

  public async insertToken(data: any, token: string) {
    const user = await this.lookForUser(data);
    try {
      Object.assign(user, { token: token });
      const result = await this.store.save(user);
      return result;
    } catch (error) {
      return error;
    }
  }

  public async checkToken(email: string, token: any) {

    try {
      const user = await this.store.createQueryBuilder('user')
        .where('user.email = :email', { email: email })
        .andWhere('user.token = :token', { token: token })
        .getOne();

      return user ? user : false;
    } catch (error) {
      throw new CustomError(400, { message: 'Database error!' });
    }

  }

  public async validateUser(data: any) {
    try {

      const user = await this.lookForUser(data);
      const comparePassword = await new Cryptography().comparePassword(data.password, user.password);
      if (!comparePassword) {throw new CustomError(400, { message: 'Error validating password!' });}
        
      return user;

    } catch (error) {
      throw error;
    }

  }



}
