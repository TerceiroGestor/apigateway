import bcrypt from 'bcrypt';

export class Cryptography {

  public async encryption(data: any) {

    const obj: Record<string, string> = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {

        if (key == 'id' || key == 'password') {
          const value = data[key];
          const encryptedValue = await bcrypt.hash(value, await bcrypt.genSalt(10)); // Encripta o valor
          obj[key] = encryptedValue; // Armazena no novo objeto
        } else {
          obj[key] = data[key]; // Armazena no novo objeto
        }

      }

    }
    return obj;

  }

  public async dencryption(data: any) {

    const obj: Record<string, string> = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {

        if (key == 'id' || key == 'password') {
          const value = data[key];
          const encryptedValue = await bcrypt.hash(value, await bcrypt.genSalt(10)); // Encripta o valor
          obj[key] = encryptedValue; // Armazena no novo objeto
        } else {
          obj[key] = data[key]; // Armazena no novo objeto
        }

      }

    }
    return obj;

  }
}