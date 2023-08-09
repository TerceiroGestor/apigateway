import { logRepository } from "../repositories/logRepository";
import bcrypt from 'bcrypt';

export class LogService {

  public async create(data: any, details: any) {

    try {

      const response = await logRepository.save(
        logRepository.create({
          "user_id": data.uid,
          "customerInfo": data.name,
          "details": details,
        })
      );

      return data

    } catch (error) {
      return error;
    }

  }

}
