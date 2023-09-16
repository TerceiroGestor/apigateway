import { CustomError } from './CustomError';
import crypto from 'crypto';

export class Cryptography {

  private readonly sensitiveKeys: string[] = ['password'];
  private readonly secretKey: string = process.env.ENCRYPT_SECRET_KEY || '';

  public async encryption(data: any) {

    const obj: Record<string, string> = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {

        if (this.sensitiveKeys.includes(key)) {
          const value = data[key];
          const salt = crypto.randomBytes(16).toString('hex'); // Gerar um sal aleatório
          const hash = crypto.pbkdf2Sync(value, salt, 10000, 64, 'sha512').toString('hex'); // Gerar o hash com PBKDF2
          obj[key] = `${salt}:${hash}`; // Armazenar o sal junto com o hash
        } else {
          obj[key] = data[key];
        }

      }

    }

    return obj;

  }

  public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {

    try {
      const [salt, originalHash] = hashedPassword.split(':');
      const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex'); // Gerar o hash com PBKDF2
      return hash === originalHash;
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
          obj[key] = data[key];
        }

      }

    }
    return obj;

  }
}
