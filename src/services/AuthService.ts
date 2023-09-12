import { AppDataSource } from "../data-source";
import { Auth } from "../entities/Auth";

export class AuthService {

  private readonly store: any;

  constructor() {
    this.store = AppDataSource.getRepository(Auth);
  }

  public async create(data: any, token: any) {

    try {

      Object.assign(data, { token: token, user_id: data.id, user_name: data.name});
      const filterdata = await this.filterData(data);
      const result = await this.store.save(this.store.create(filterdata))
      return result;

    } catch (error) {
      return error;
    }

  }

  public async delete(token: any) {
    try {

      const result = await this.store.softDelete({ token: token });
      return result.affected ? { messagem: "Success in terminating authentication!" } : { messagem: "Error in terminating authentication!" };

    } catch (error) {

      return error;

    }

  }

  public async verifyAuthToday(data: any) {

    const result = await this.store
      .createQueryBuilder('auth')
      .where('auth.email = :email', { email: data.email })
      .andWhere('DATE(auth.created) = :today', { today: new Date().toISOString().split('T')[0] })
      .andWhere('EXTRACT(HOUR FROM auth.created) = :currentHour', { currentHour: new Date().getHours() })
      .getOne();

    return result ? result : false;
  }

  public async filterData(data: any) {
    delete data.id;
    delete data.created;
    delete data.updated;
    delete data.deleted;
    delete data.version;

    return data;
  }
}
