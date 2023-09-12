import { AppDataSource } from "../data-source";
import { Auth } from "../entities/Auth";
import { CustomError } from "../secure/CustomError";

export class AuthService {

  private readonly store: any;

  constructor() {
    this.store = AppDataSource.getRepository(Auth);
  }

  public async create(data: any) {

    try {

      Object.assign(data, { user_id: data.id });
      const filterdata = await this.filterData(data);
      const result = await this.store.save(this.store.create(filterdata));
      return result;

    } catch (error) {
      throw new CustomError(400, { message: 'Database Error!' })
    }

  }

  public async delete(id: string) {
    try {

      const result = await this.store.softDelete({ id: id });
      
      if (result.affected) {
        return { status: true, messagem: "Success in terminating authentication!" };
      } else {
        throw new CustomError(400, { status: false, message: 'Error in terminating authentication!' });
      }

    } catch (error) {
      throw error;
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

  /**
   * Filtrar as keys {id: created: updated: deleted: version:}
   * @param data 
   * @returns 
   */
  public async filterData(data: any) {
    delete data.id;
    delete data.created;
    delete data.updated;
    delete data.deleted;
    delete data.version;

    return data;
  }
}
