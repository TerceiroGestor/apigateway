interface UserData {
  name: string;
  email: string;
  isvalid: boolean;
  email_verified: boolean;
  // Outros campos de dados do usuário
}


export class ValidationData {
  private static instance: ValidationData;
  public userData: UserData | null = null;
  private constructor() { }

  public static getInstance(): ValidationData {
    if (!ValidationData.instance) {
      ValidationData.instance = new ValidationData();
    }
    return ValidationData.instance;
  }

  public setValid(userData: UserData): void {
    //this.isValid = isValid;
    this.userData = userData;
  }

  public getValid(): object {

    return {
      //isValid: this.isValid,
      userData: this.userData,
    };
  }

}
