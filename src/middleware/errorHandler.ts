
import { Request, Response, NextFunction } from 'express';
import { CustomError } from './customError';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json(err);
    } else {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}