export class Validator {

  private readonly type: Record<string, string> = {
    email: 'string',
    password: 'string',
    token: 'string',
    firstName: 'string',
    lastName: 'string',
    age: 'number',
    birthDate: 'string',
    isActive: 'boolean',
    roles: 'array',
    address: 'object',
  }

  validate(obj: Record<string, any>): Record<string, string> {
    const errors: Record<string, string> = {};

    for (const key in obj) {
      if (this.type.hasOwnProperty(key)) {
        const expectedType = this.type[key];
        const actualValue = obj[key];

        if (typeof actualValue !== expectedType) {
          errors[key] = `O campo ${key} deve ser do tipo ${expectedType}.`;
        }
      }
    }

    return errors;

  }

  isEmailValid(email: string): any {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email) //?  {status: true, message:'Este email é válido!'} :  {status: false, message:'Este email não é válido!'};
  }

  isPasswordValid(password: string): any {

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    return passwordRegex.test(password) //?  {status: true, message:'Senha segue o padrão!'} : {status: false, message:'Senha não segue o padrão!'};

  }
}
