export class CustomError extends Error {

    public name: string;
    public statusCode: number;
    public info: object;

    constructor(statusCode: number, name: string, message: string, info: object) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        this.info = info;
    }
}