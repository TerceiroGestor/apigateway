import { authRepository } from "../repositories/authRepository";

export class AuthService {

  public async create(user: any, tokens: any) {

    try {
      const authToday = await this.verifyAuthToday(user);
      if (!authToday) {
        const response = await authRepository.save(
          authRepository.create({
            "user_id": user.id,
            "email": user.email,
            "token": tokens,
          })
        );
        return response;
      } else {
        return { message: 'authentication has already been performed today!' }
      }

    } catch (error) {
      return error;
    }

  }

  public async delete(token: any) {
    try {

      const response = await authRepository.softDelete({ token: token });

      return { messagem: "Autenticação finalizada com sucesso!" };

    } catch (error) {

      return error;

    }

  }

  public async verifyAuthToday(user: any) {
    const response = await authRepository
      .createQueryBuilder('auth')
      .where('auth.email = :email', { email: user.email })
      .andWhere('DATE(auth.created) = :today', { today: new Date().toISOString().split('T')[0] }) // Filtra apenas pela data
      .andWhere('EXTRACT(HOUR FROM auth.created) = :currentHour', { currentHour: new Date().getHours() }) // Filtra pela hora atual
      .getOne();
      
    return response ? true : false;
  }

}
