import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        error: {
            code: statusCode,
            message: err.message || "Ocorreu um erro no servidor."
        }
    });
}