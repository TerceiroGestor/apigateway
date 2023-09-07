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
}
