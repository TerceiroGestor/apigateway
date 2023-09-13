import bcrypt from 'bcrypt';
import { CustomError } from './CustomError';

export class Cryptography {

  private readonly sensitiveKeys: string[] = ['password'];
  private readonly secretKey: string = process.env.ENCRYPT_SECRET_KEY || '';

  public async encryption(data: any) {

    const obj: Record<string, string> = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {

        if (this.sensitiveKeys.includes(key)) {
          const value = data[key];
          const encryptedValue = await bcrypt.hash(value, await bcrypt.genSalt(10));
          obj[key] = encryptedValue;
        } else {
          obj[key] = data[key];
        }

      }

    }

    return obj;

  }

  public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {

    try {
      const compare = await bcrypt.compare(password, hashedPassword);
      return compare;
    } catch (error) {
      throw new CustomError(400, { message: 'Error validating password!' });
    }

  }

  public async dencryption(data: any) {

    const obj: Record<string, string> = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {

        if (this.sensitiveKeys.includes(key)) {
          const encryptedValue = data[key];
        } else {
          obj[key] = data[key]; // Armazena no novo objeto
        }

      }

    }
    return obj;

  }


}
