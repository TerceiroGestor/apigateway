import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define uma interface para o payload do token
interface TokenPayload {
  userId: string;
  // Adicione aqui quaisquer outras informações necessárias no payload
}

function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {

  // Obtenha o token do cabeçalho da requisição
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  try {

    // Verifique e decodifique o token
    const decoded = jwt.verify(token, 'chave-secreta'); // Substitua 'chave-secreta' pela sua chave secreta real

    // Define o payload do token na requisição para uso posterior, se necessário
    //req.user = decoded as TokenPayload;

    // Chame o próximo middleware ou rota
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token de autenticação inválido.' });
  }
}

export default authenticationMiddleware;
