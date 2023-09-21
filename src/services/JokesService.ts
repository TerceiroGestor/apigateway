import { CustomError } from "../security/CustomError";

export class JokesService {

  private readonly serviceconfig: any;

  constructor() {
    this.serviceconfig = process.env.AUTHORIZATION;
  }

  public async create(data?: any): Promise<any> {

    try {

      const response = await fetch('http://localhost:3001/api/jokes', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.serviceconfig
        }
      });

      const json = await response.json();
      return json;

    } catch (error) {
      throw new CustomError(400, { message: 'Error Services!' });
    }

  }

  public async read(data: any) {

    try {

      const baseURL = 'http://localhost:3001/api/jokes';
      const params = data
      const url = new URL(baseURL);
      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.serviceconfig
        }
      });

      const json = await response.json();
      return json;

    } catch (error) {
      throw new CustomError(400, { message: 'Error Services!' });
    }

  }

  public async update(data: any) {
    try {


    } catch (error) {
      throw new CustomError(400, { message: 'Error Services!' });
    }
  }

  public async delete(uuid: any) {

    try {


    } catch (error) {
      throw new CustomError(400, { message: 'Error Services!' });
    }
  }

}
