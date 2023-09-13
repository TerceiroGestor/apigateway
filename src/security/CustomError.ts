import { HttpStatusMessages } from "../security/HttpStatusMessages";
export class CustomError extends Error {

    public info: object | undefined;
    public status: number;
  previous: unknown;

    constructor(statusCode: number, info?: object | undefined) {
        super();
        this.status = statusCode;
        this.message = HttpStatusMessages.getMessage(statusCode, 'en');
        this.info = info ;
    }
}