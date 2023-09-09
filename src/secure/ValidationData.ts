export class ValidationData {
  private static instance: ValidationData;
  private isValid: boolean = false;

  private constructor() { }

  public static getInstance(): ValidationData {
    if (!ValidationData.instance) {
      ValidationData.instance = new ValidationData();
    }
    return ValidationData.instance;
  }

  public setValid(isValid: boolean): void {
    this.isValid = isValid;
  }

}
