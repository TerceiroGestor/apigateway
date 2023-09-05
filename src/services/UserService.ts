import { userRepository } from "../repositories/userRepository";
import { Cryptography } from "../secure/Cryptography";
import bcrypt from 'bcrypt';
import { LogService } from "./LogService";

export class UserService {

  public async create(data?: any) {

    const encryption = await new Cryptography().encryption(data);

    try {

      if (encryption) {
        const response = await userRepository.save(
          userRepository.create({
            "name": encryption.name,
            "email": encryption.email,
            "password": encryption.password
          })
        );
        return response ? { store: true, message: 'Dados armazenados com sucesso!' } : { store: false, message: 'Erro ao armazenar dados!'};
      }

    } catch (error) {
      return error;
    }

  }

  public async createAuth(data: any) {

    // Verifique se o usuário já existe
    const existingUser = await this.checkIfUserExists(data);

    if (existingUser) {

      return existingUser;

    } else {

      const response = await userRepository.save(
        userRepository.create({
          "auth_id": data.sub,
          "name": data.name,
          "lastname": data.family_name,
          "email": data.email,
          "email_verified": data.email_verified
        })
      );

      return response;

    }
  }

  public async read(email: any) {

    try {

      const response = await userRepository.findOneBy({ email: email });

      return response;

    } catch (error) {
      return error;
    }

  }

  public async update(data: any) {

    try {

      const user = await userRepository.findOneBy({ email: data.email });

      if(user){
        user.email_verified =  true;
        const store = await userRepository.save(user);
        return true;
      }else{
        return false
      }
     
    } catch (error) {
      return error;
    }

  }

  public async delete(uuid: any) {

    try {

      const response = await userRepository.delete({ auth_id: uuid });
      return response;

    } catch (error) {
      return error;
    }

  }

  public async checkIfUserExists(data: any) {

    const user = await userRepository.findOneBy({ email: data.email });

    if (user) {

      /* new LogService().create(user, { message: `O usuário com o email ${data.email} já existe.` }); */
      return user;

    } else {

      return false;

    }

  }

/*   public async encryption(data: any) {

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

  } */
}
